import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'

const PostHeader = ({ postData }) => {

    const {
      data: userData,
      isLoading: userLoading,
      isSuccess: userSuccess,
    } = useGetUserByIdQuery(postData.author)

  return (
    <div className="flex justify-between px-4">
      <div>
        <Button variant="normal" size="normal">
          <div className="flex items-center">
            <div>
              <img
                className="h-9 w-9 rounded-full"
                src={userData?.profilePicture || ''}
                alt="profile"
              />
            </div>
            <div className="pl-4">{userData?.username}</div>
          </div>
        </Button>
      </div>
      <div>
        <img src={Assets.more} alt="more" className="w-8 pt-1" />
      </div>
    </div>
  )
}

export default PostHeader
