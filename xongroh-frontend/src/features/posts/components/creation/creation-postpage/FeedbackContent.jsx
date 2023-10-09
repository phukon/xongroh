import Feedback from './Feedback'
import FeedbackForm from './FeedbackForm'
import { useState, useEffect } from 'react'

import { selectCurrentToken } from '@/features/auth/authSlice'
import { useSelector } from 'react-redux'

const FeedbackContent = ({ postId, currentUserId, feedbacks }) => {
  //start----------hotfix----------------
  // hotfix-1
  const apiUrl = import.meta.env.VITE_API
  const authToken = useSelector(selectCurrentToken)

  async function feedbackTrig(apiUrl, authToken, text, parentId, postId) {
    try {
      const requestBody = { text, parentId }
      const response = await fetch(`${apiUrl}post/feedbacks/${postId}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    } catch (error) {
      throw error
    }
  }

  // -----------------------------//
  // hotfix-2
  async function deleteFeedbackTrig(feedbackId) {
    try {
      const response = await fetch(`${apiUrl}post/feedbacks/${feedbackId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    } catch (error) {
      throw error
    }
  }

  // hotfix-3
  async function updateFeedbackTrig(text, feedbackId) {
    try {
      const requestBody = { text }
      const response = await fetch(`${apiUrl}post/feedbacks/${feedbackId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    } catch (error) {
      throw error
    }
  }

  //end----------hotfix----------------

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
    feedbackTrig(apiUrl, authToken, text, parentId, postId).then((feedback) => {
      setBackendFeedbacks([feedback.feedback, ...backendFeedbacks])
      setActiveFeedback(null)
    })
  }

  const updateFeedback = (text, feedbackId) => {
    updateFeedbackTrig(text, feedbackId).then(() => {
      const updatedBackendFeedbacks = backendFeedbacks.map((backendFeedback) => {
        if (backendFeedback._id === feedbackId) {
          return { ...backendFeedback, text: text }
        }
        return backendFeedback
      })
      setBackendFeedbacks(updatedBackendFeedbacks)
      setActiveFeedback(null)
    })
  }

  const deleteFeedback = (feedbackId) => {
    if (window.confirm('Are you sure you want to remove feedback?')) {
      deleteFeedbackTrig(feedbackId).then(() => {
        const updatedBackendFeedbacks = backendFeedbacks.filter((backendFeedback) => backendFeedback._id !== feedbackId)
        setBackendFeedbacks(updatedBackendFeedbacks)
      })
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
