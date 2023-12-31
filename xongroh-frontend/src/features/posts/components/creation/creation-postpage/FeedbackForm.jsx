import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const FeedbackForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
  postId,
}) => {
  const [text, setText] = useState(initialText)
  const isTextareaDisabled = text.length === 0
  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit(text, null, postId)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <Textarea
        className="comment-form-textarea h-24 rounded-xl"
        placeholder="Share your thoughts... .."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="normal" size="normal" className="text-secondary-foreground" disabled={isTextareaDisabled}>
        {submitLabel}
      </Button>
      {hasCancelButton && (
        <button type="button" className="comment-form-button comment-form-cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}

export default FeedbackForm
