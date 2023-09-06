import { useSelector } from 'react-redux'
import { selectPostIds } from './postsApiSlice'
import PostsExcerpt from './PostsExcerpt'
import { useGetPostsQuery } from './postsApiSlice'

const PostsList = () => {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery(postsList, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })

  const orderedPostIds = useSelector(selectPostIds)

  let content
  if (isLoading) {
    content = <p>"Loading..."</p>
  } else if (isSuccess) {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ))
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <section>{content}</section>
}
export default PostsList
