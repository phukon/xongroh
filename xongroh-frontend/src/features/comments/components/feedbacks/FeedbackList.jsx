import Feedback from '@/features/comments/components/feedbacks/Feedback'

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      {feedbacks.map((feedback) => (
        <Feedback
          key={feedback.id}
          name={feedback.name}
          text={feedback.text}
          likes={feedback.likes}
          replies={feedback.replies}
        />
      ))}
    </div>
  )
}

export default FeedbackList
