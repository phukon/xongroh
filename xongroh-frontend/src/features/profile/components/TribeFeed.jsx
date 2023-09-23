import { Button } from '@/components/ui/button'
import { useState } from 'react'
import TribePostList from '@/features/posts/components/tribe/TribePostList'

const TribeFeed = () => {
  const [buttonText, setButtonText] = useState('Join')
  const handleButtonClick = () => {
    setButtonText((prevButtonText) =>
      prevButtonText === 'Join' ? 'Joined' : 'Join',
    )
  }

  

  return (
    <div>
      <div className='pb-4'>
        <p className="px-3 pb-6 text-sm">
          Interact with your favourite creator. Join their tribe to share new
          ideas, feedback and suggestions.
        </p>
        <div className="flex items-center justify-around">
          <h2 className="text-base font-semibold text-secondary-foreground">
            Welcome to Rupam's Tribe
          </h2>
          {buttonText === 'Join' ? (
            <Button variant="normal" size="normal" onClick={handleButtonClick}>
              {buttonText}
            </Button>
          ) : (
            <Button
              variant="normal"
              size="normal"
              className="text-secondary-foreground"
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
      <div>
        <TribePostList />
      </div>
    </div>
  )
}

export default TribeFeed
