import Feedback from './Feedback'
import FeedbackForm from './FeedbackForm'
import { useState, useEffect } from 'react'
import {
  useFeedbackTriggerMutation,
  useDeleteFeedbackTriggerMutation,
  useUpdateFeedbackTriggerMutation,
} from '@/features/posts/postsApiSlice'

const FeedbackContent = ({ postId, currentUserId, feedbacks }) => {

  const [feedbackTrigger, { data, isLoading, isSuccess, isError, error }] = useFeedbackTriggerMutation()

  const [
    deleteFeedbackTrigger,
    { isLoading: deleting, isSuccess: deleteSuccess, isError: deleteError, error: deleteErrors },
  ] = useDeleteFeedbackTriggerMutation()

  const [
    updateFeedbackTrigger,
    { isLoading: updating, isSuccess: updateSuccess, isError: updateError, error: updateErrors },
  ] = useUpdateFeedbackTriggerMutation()

  const [backendFeedbacks, setBackendFeedbacks] = useState([])
  const [activeFeedback, setActiveFeedback] = useState(null)

  const rootFeedbacks = backendFeedbacks
    .filter((backendFeedback) => backendFeedback.parentId === null)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  const getReplies = (feedbackId) =>
    backendFeedbacks
      .filter((backendFeedback) => backendFeedback.parentId === feedbackId)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  const addFeedback = (text, parentId, postId) => {
    feedbackTrigger({ text, parentId, postId })
    if (isSuccess) {
      setBackendFeedbacks([data.feedbacks, ...backendFeedbacks])
      setActiveFeedback(null)
    }
  }

  const updateFeedback = (text, feedbackId) => {
    updateFeedbackTrigger({ text: text, feedbackId })
    if (updateSuccess) {
      const updatedBackendFeedbacks = backendFeedbacks.map((backendFeedback) => {
        if (backendFeedback.id === feedbackId) {
          return { ...backendFeedback, text: text }
        }
        return backendFeedback
      })
      setBackendFeedbacks(updatedBackendFeedbacks)
      setActiveFeedback(null)
    }
  }

  const deleteFeedback = (feedbackId) => {
    if (window.confirm('Are you sure you want to remove the feedback?')) {
      deleteFeedbackTrigger({ feedbackId: feedbackId })
      if (deleteSuccess) {
        const updatedBackendFeedbacks = backendFeedbacks.filter((backendFeedback) => backendFeedback._id !== feedbackId)
        setBackendFeedbacks(updatedBackendFeedbacks)
      }
    }
  }

  useEffect(() => {
    setBackendFeedbacks(feedbacks)
  }, [])

  return (
    <div className="comments">
      <FeedbackForm submitLabel="Send" postId={postId} handleSubmit={addFeedback} />
      <div className="comments-container">
        {rootFeedbacks.map((rootFeedback) => (
          <Feedback
            key={rootFeedback._id}
            feedback={rootFeedback}
            replies={getReplies(rootFeedback._id)}
            activeFeedback={activeFeedback}
            setActiveFeedback={setActiveFeedback}
            addFeedback={addFeedback}
            deleteFeedback={deleteFeedback}
            updateFeedback={updateFeedback}
            currentUserId={currentUserId}
            postId={postId}
          />
        ))}
      </div>
    </div>
  )
}

export default FeedbackContent
