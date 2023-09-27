import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Comment from '@/features/comments/components/comments/Comment'

const CommentList = ({ comments }) => {
  return (
    <div>
      <div>
        <Textarea
          className=" h-24 rounded-xl"
          placeholder="Write something..."
        />
      </div>
      <div className="px-1 py-4 ">
        <Button
          variant="normal"
          size="normal"
          className="text-secondary-foreground"
        >
          Comment
        </Button>
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          text={comment.text}
          likes={comment.likes}
          replies={comment.replies}
        />
      ))}
    </div>
  )
}

export default CommentList
