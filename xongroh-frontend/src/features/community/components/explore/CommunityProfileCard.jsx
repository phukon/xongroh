import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Assets from '@/assets/Assets'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom' 

const dummyData = [
  { name: 'Art Community', members: '100', dp: Assets.art },
  { name: 'Cinematography Community', members: '999', dp: Assets.cinematography },
  { name: 'Music Community', members: '12.6K', dp: Assets.music },
  { name: 'Photography Community', members: '2.6K', dp: Assets.photography },
]

const CommunityProfileCardItem = ({ name, members, dp }) => {
  const [buttonText, setButtonText] = useState('Join')

  const handleButtonClick = () => {
    if (buttonText === 'Join') {
      setButtonText('View')
    
    }
  }

  return (
    <Card className="mt-5">
      <div className="flex items-center justify-between p-3 py-5">
        <div>
          <CardHeader className="p-0">
            <div className="flex items-center">
              <img className="h-12 w-12 rounded-full " src={dp} alt="profile" />
              <div className="pl-4">
                <CardTitle className="line-clamp-1 text-sm">{name}</CardTitle>
                <CardDescription className="text-xs">Members: {members}</CardDescription>
              </div>
            </div>
          </CardHeader>
        </div>
        <div>
          <CardContent className="p-0">
            {buttonText === 'View' ? (
              <Link to={`/communitypage`}>
                <Button
                  variant="normal"
                  size="normal"
                  onClick={handleButtonClick}
                >
                  {buttonText}
                </Button>
              </Link>
            ) : (
              <Button
                variant="normal"
                size="normal"
                onClick={handleButtonClick}
              >
                {buttonText}
              </Button>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

const CommunityProfileCard = () => {
  return (
    <div>
      {dummyData.map((data, index) => (
        <CommunityProfileCardItem
          key={index}
          name={data.name}
          members={data.members}
          dp={data.dp}
        />
      ))}
    </div>
  )
}

export default CommunityProfileCard
