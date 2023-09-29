import CommentList from '@/features/comments/components/comments/CommentList'


const CommentContent = ({postId, comments}) => {
    const sortedComments = comments.slice().sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp)
    })
  return (
    <div>
      <CommentList postId={postId} comments={sortedComments} />
    </div>
  )
}

export default CommentContent


