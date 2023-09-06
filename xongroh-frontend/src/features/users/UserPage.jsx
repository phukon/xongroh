import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'
import { Link, useParams } from 'react-router-dom'
import { useGetPostsByUserIdQuery } from '../posts/postsApiSlice'

const UserPage = () => {
  const { userId } = useParams()
  const user = useSelector((state) => selectUserById(state, userId))
  console.log(user?.following) // Use optional chaining here
  let posts = null

  if (user?.following?.length === 0) {
    posts = <p>No posts found.</p>
  }

  // const {
  //   data: postsForUser,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetPostsByUserIdQuery(userId)
  // to be used later
  // let content
  // if (isLoading) {
  //   content = <p>Loading...</p>
  // } else if (isSuccess) {
  //   const { ids, entities } = postsForUser
  //   content = ids.map((id) => (
  //     <li key={id}>
  //       <Link to={`/post/${id}`}>{entities[id].email}</Link>
  //     </li>
  //   ))
  // } else if (isError) {
  //   content = <p>{error}</p>
  // }

  return (
    <section>
      <h2>{user?.username}</h2>
      <p>The posts wil be listed here</p>
      <div>{posts}</div>
      {/* <ol>{content}</ol> */}
    </section>
  )
}

export default UserPage
