import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import FeedbackList from '@/features/comments/components/feedbacks/FeedbackList'

const feedback = [
  {
    id: 1,
    name: 'Superman Bora',
    text: 'borhia komol borhia...',
    likes: 1,
    replies: [
      {
        id: 2,
        name: 'Rupam Bora',
        text: 'thank you sir',
        likes: 1,
      },
    ],
  },
]

const FeedbackContent = () => {
  return (
    <div>
      <div>
        <Textarea
          className=" h-24 rounded-xl"
          placeholder="Share your thoughts with the creator..."
        />
      </div>
      <div className="px-1 py-4">
        <Button
          variant="normal"
          size="normal"
          className="text-secondary-foreground"
        >
          Send
        </Button>
      </div>
      <div>
        <FeedbackList feedbacks={feedback} />
      </div>
      <div>
        <p className="py-6 text-xs">
          Note: Feedbacks are sent to the creator in private.
        </p>
      </div>
    </div>
  )
}

export default FeedbackContent
