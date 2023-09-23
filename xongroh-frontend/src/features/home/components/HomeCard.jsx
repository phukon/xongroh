import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

const HomeCard = () => {
    const { username } = useAuth()
  return (
    <div className="overflow-hidden">
      <div className="header mb-6 rounded-b-3xl bg-[#FAFAFA] px-5 pb-12 shadow-lg ">
        <div className="text-medium p-5 pb-7 text-base font-normal ">
          <p className="font-bold">Hi {username},</p>
          <p>Let’s explore some new creations today!</p>
        </div>

        <div className="grid grid-cols-2 gap-7 px-3 text-sm font-semibold">
          <Link to="/mydrafts">
            <Button
              variant="normal"
              className="w-full text-secondary-foreground"
            >
              Drafts
            </Button>
          </Link>

          <Link to="/mydiscussions">
            <Button
              variant="normal"
              className="w-full text-secondary-foreground"
            >
              Discussions
            </Button>
          </Link>

          <Button variant="normal" className="text-secondary-foreground">
            Events
          </Button>
          <Button variant="normal" className="text-secondary-foreground">
            Masterclass
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
