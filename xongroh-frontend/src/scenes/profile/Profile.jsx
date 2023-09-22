import React, { useEffect } from 'react'
import Assets from '@/assets/Assets'
import ProfilePost from '@/components/ProfilePost'
import useAuth from '@/hooks/useAuth'
import { useVerifyUserMutation } from '@/features/auth/authApiSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetPostsQuery } from '@/features/posts/postsApiSlice'
import { Link } from 'react-router-dom'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'

const Profile = () => {
  const navigate = useNavigate()
  const { username, userId } = useAuth()
  const { id } = useParams()
  const {
    data,
    isLoading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
  } = useGetUserByIdQuery(id)

  const [verifyUser] = useVerifyUserMutation()

  const handleVerifyUser = async () => {
    try {
      const reef = await verifyUser({ userId: id }).unwrap()
    } catch (error) {
      if (error.status === 404 || 400) {
        console.error('User not found')
        navigate('/dash/profile/user-not-found')
      }
    }
  }

  useEffect(() => {
    if (id) {
      handleVerifyUser()
    }
  }, [id])

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery('Posts', {
    pollingInterval: 5 * 60 * 1000,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: true,
  })

  let content = null

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    ;<p>{error?.data?.message}</p>
  } else if (isSuccess) {
    const { ids, entities } = posts

    content = ids?.length ? (
      ids.map((postId) => (
        <Link key={postId} to={`/dash/posts/${postId}`}>
          <ProfilePost
            title={entities[postId].title}
            content={entities[postId].content}
            cover={entities[postId].cover}
            author={entities[postId].author}
          />
        </Link>
      ))
    ) : (
      <p>No posts found.</p>
    )
  }

  return (
    <div className="overflow-hidden bg-[#FFF5E8] mb-20">
      <div className="flex flex-col">
        <img src={Assets.dummy1} className=" h-40 object-cover" />
        <div className="header shadow-card flex flex-col items-center rounded-b-3xl bg-[#C8E4B2] px-3 pb-6 pt-5">
          <div className="-mb-10 flex w-full flex-row justify-around">
            <div className="text-center">
              <div className="font-bold">25</div>
              <div className="text-sm	font-medium">Creations</div>
            </div>
            <img
              src={data?.profilePicture || ''}
              className="relative bottom-16 w-28 h-28 rounded-full overflow-hidden"
            />
            <div className="text-center">
              <div className="font-bold">25k</div>
              <div className="text-sm	font-medium">Supporters</div>
            </div>
          </div>

          <div className="pb-2 pt-2 text-xl font-bold">{username}</div>
          <p className=" px-5 pb-6 text-center text-sm font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis a est dapibus posuere. Donec molestie risus ac elit imperdiet
            pretium. Phasellus volutpat nec ligula gfsjak...
          </p>

          <div className="flex w-full flex-row justify-center">
            <button className="shadow-button mx-4 h-9 w-28 rounded-3xl bg-[#DFCCFB] px-4 py-1 text-sm	 font-medium">
              Create
            </button>
            <button
              className="shadow-button mx-4 h-9 w-28 rounded-3xl bg-[#FFFFFF] px-4 py-1 text-sm font-medium"
              onClick={() => navigate('edit')}
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 pb-2 pt-10">
        <div className="overflow-x-scroll whitespace-nowrap">
          <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
            <button className="shadow-button ml-3 mr-1 h-8 w-52 rounded-3xl bg-[#DFCCFB] px-3 py-1">
              Portfolio
            </button>
            <button className="shadow-button mx-1 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Tribe
            </button>
            <button className="shadow-button mx-1 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Store
            </button>
            <button className="shadow-button ml-1 mr-3 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Events
            </button>
          </div>
        </div>
      </div>

      <div className="px-4">{content}</div>
    </div>
  )
}

export default Profile
