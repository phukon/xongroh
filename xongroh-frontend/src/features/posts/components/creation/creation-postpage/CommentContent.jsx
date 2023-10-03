import CommentList from '@/features/comments/components/comments/CommentList'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { useState, useEffect } from 'react'
import {
  useCommentTriggerMutation,
  useDeleteCommentTriggerMutation,
  useUpdateCommentTriggerMutation,
} from '@/features/posts/postsApiSlice'

const CommentContent = ({ postId, currentUserId, comments }) => {
  // const sortedComments = comments.slice().sort((a, b) => {
  //   return new Date(b.timestamp) - new Date(a.timestamp)
  // })

  const [commentTrigger, { data, isLoading, isSuccess, isError, error }] =
    useCommentTriggerMutation()

  const [
    deleteCommentTrigger,
    {
      isLoading: deleting,
      isSuccess: deleteSuccess,
      isError: deleteError,
      error: deleteErrors,
    },
  ] = useDeleteCommentTriggerMutation()

  const [
    updateCommentTrigger,
    {
      isLoading: updating,
      isSuccess: updateSuccess,
      isError: updateError,
      error: updateErrors,
    },
  ] = useUpdateCommentTriggerMutation()

  const [backendComments, setBackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)

  const rootComments = backendComments
    .filter((backendComment) => backendComment.parentId === null)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  const addComment = (text, parentId, postId) => {
    commentTrigger({ text, parentId, postId })
    if (isSuccess) {
      setBackendComments([data.comment, ...backendComments])
      setActiveComment(null)
    }
  }

  const updateComment = (text, commentId) => {
    updateCommentTrigger({ text: text, commentId })
    console.log(updateSuccess)
    if (updateSuccess) {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, text: text }
        }
        return backendComment
      })
      setBackendComments(updatedBackendComments)
      setActiveComment(null)
    }
  }

  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentTrigger({ commentId: commentId })
      if (deleteSuccess) {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment._id !== commentId
        )
        setBackendComments(updatedBackendComments)
      }
    }
  }

  useEffect(() => {
    setBackendComments(comments)
  }, [])

  return (
    <div className="comments">
      <CommentForm
        submitLabel="Comment"
        postId={postId}
        handleSubmit={addComment}
      />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
            postId={postId}
          />
        ))}
      </div>
    </div>

    // <div>
    //   <CommentList postId={postId} comments={sortedComments} />
    // </div>
  )
}

export default CommentContent
