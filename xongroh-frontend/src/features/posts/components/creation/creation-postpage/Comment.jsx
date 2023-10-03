import CommentForm from './CommentForm'
import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'
import { useState, useEffect } from 'react'
import { useLikeCommentMutation } from '@/features/posts/postsApiSlice'

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
  postId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === 'editing'
  const isReplying =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === 'replying'
  const fiveMinutes = 300000
  const timePassed = new Date() - new Date(comment.timestamp) > fiveMinutes
  const canDelete =
    currentUserId === comment.author && replies.length === 0 && !timePassed
  const canReply = Boolean(currentUserId)
  const canEdit = currentUserId === comment.author && !timePassed
  const replyId = parentId !== null ? parentId : comment._id

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }
    return date.toLocaleDateString('en-US', options)
  }

  const [likeComment, { data, isLoading, isSuccess, isError, error }] =
    useLikeCommentMutation()

  const [isLiked, setIsLiked] = useState(false)
  const [numberOfLikes, setNumberOfLikes] = useState(0)

  const {
    data: userData,
    isLoading: userLoading,
    isSuccess: userSuccess,
  } = useGetUserByIdQuery(comment.author)

  const createdAt = formatTimestamp(comment.timestamp)

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        await likeComment({ commentId: comment._id})
        setIsLiked(false)
        setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes - 1)
      } else {
        await likeComment({ commentId: comment._id })
        setIsLiked(true)
        setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes + 1)
      }
    } catch (error) {
      console.error('Error liking/unliking comment:', error)
    }
  }

  useEffect(() => {
    if (comment.likes && comment.likes.hasOwnProperty(currentUserId)) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
    const likeCount = Object.keys(comment.likes).length
    setNumberOfLikes(likeCount)
  }, [comment])

  return (
    <div key={comment._id} className="px-3 pt-6 text-sm">
      <div>
        <img
          className="h-9 w-9 rounded-full"
          src={userData?.profilePicture || ''}
          alt="profile"
        />
      </div>
      <div className="mr-2 text-base font-semibold text-secondary-foreground ">
        <div>
          <div className="comment-author">{userData?.username}</div>
          <p className="text-gray-600 text-sm italic">{createdAt}</p>
        </div>
        {!isEditing && <div className="comment-text">{comment.text}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.text}
            handleSubmit={(text) => updateComment(text, comment._id)}
            handleCancel={() => {
              setActiveComment(null)
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div className="flex">
              <Button
                variant="link"
                className="pl-0"
                onClick={() =>
                  setActiveComment({ id: comment._id, type: 'replying' })
                }
              >
                Reply
              </Button>
              <Button
                variant="link"
                onClick={handleLikeClick}
                className="pl-0 text-secondary-foreground"
              >
                <img src={Assets.heart} alt="hearts" className="pr-1" />
                {numberOfLikes}
              </Button>
            </div>
          )}
          {canEdit && (
            <Button
              variant="link"
              className="pl-0"
              onClick={() =>
                setActiveComment({ id: comment._id, type: 'editing' })
              }
            >
              Edit
            </Button>
          )}
          {canDelete && (
            <Button
              variant="link"
              className="pl-0"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </Button>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId, postId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserId={currentUserId}
                postId={postId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment
