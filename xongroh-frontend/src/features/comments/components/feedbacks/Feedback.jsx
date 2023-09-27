import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'

const Feedback = ({ name, text, likes, replies }) => {
  return (
    <div className="px-3 pt-6 text-sm">
      <div>
        <p className="mr-2 text-base font-semibold text-secondary-foreground ">
          {name}
        </p>
        <p className="pt-1">{text}</p>
      </div>
      <div className="flex">
        <div>
          <Button variant="link" className="pl-0">
            Reply
          </Button>
        </div>
        <div>
          <Button variant="link" className="pl-0 text-secondary-foreground">
          <img src={Assets.heart} alt="hearts" className='pr-1' />{likes} 
          </Button>
        </div>
      </div>

      {replies && replies.length > 0 && (
        <div className="">
          {replies.map((reply) => (
            <div key={reply.id} className="pl-6 pt-4">
              <div>
                <p className="mr-2 font-semibold text-secondary-foreground">
                  {reply.name}
                </p>
                <p className="pt-1">{reply.text}</p>
              </div>
              <Button
                variant="link"
                className="pl-0 text-secondary-foreground "
              >
                <img src={Assets.heart} alt="hearts" className='pr-1' />{reply.likes} 
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Feedback
