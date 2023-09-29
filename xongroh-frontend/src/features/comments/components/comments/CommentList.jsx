import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Comment from '@/features/comments/components/comments/Comment'
import { useCommentTriggerMutation } from '@/features/posts/postsApiSlice'
import useAuth from '@/hooks/useAuth'

const CommentList = ({ postId, comments }) => {
  const [commentTrigger, { data, isLoading, isSuccess, isError, error }] =
    useCommentTriggerMutation()

  const { userId } = useAuth()

  const [commentText, setCommentText] = useState('')

  const handleTextareaChange = (event) => {
    setCommentText(event.target.value)
  }

  const handleCommentButtonClick = async () => {
    try {
      await commentTrigger({
        text: commentText,
        userId: userId,
        postId: postId,
      })
      setCommentText('')
    } catch (error) {
      console.error('Error posting comment:', error)
    }
  }

  return (
    <div>
      <div>
        <Textarea
          className="h-24 rounded-xl"
          placeholder="Write something..."
          value={commentText}
          onChange={handleTextareaChange}
        />
      </div>
      <div className="px-1 py-4">
        <Button
          variant="normal"
          size="normal"
          className="text-secondary-foreground"
          onClick={handleCommentButtonClick}
        >
          Comment
        </Button>
      </div>
      {isSuccess && (
        <Comment text={data.comment.text} />
      )}
      {comments.map((comment) => (
        <Comment key={comment._id} author={comment.author} text={comment.text} />
      ))}
    </div>
  )
}

export default CommentList
