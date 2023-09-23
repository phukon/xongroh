import Assets from '@/assets/Assets'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const dummyData = [
  {
    name: 'Art Community',
    members: '16.6K',
    dp: Assets.art,
  },
]

const CommunityPageCardItem = ({ name, members, dp }) => {
  const [buttonText, setButtonText] = useState('Join')
  const handleButtonClick = () => {
    setButtonText((prevButtonText) =>
      prevButtonText === 'Join' ? 'Joined' : 'Join',
    )
  }

  return (
    <div className=" header mb-10 overflow-hidden rounded-b-3xl bg-[#FAFAFA] pb-6 shadow-lg ">
      <div className="flex items-center justify-between px-6 pt-2">
        <div className="flex items-center">
          <img className="h-12 w-12 rounded-full " src={dp} alt="profile" />
          <div className="pl-4">
            <h1 className="font-semibold ">{name}</h1>
            <p className=" text-xs text-muted-foreground ">
              Members: {members}
            </p>
          </div>
        </div>
        <div>
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
      <div className="px-6 pt-6 pb-4">
        <p className=" text-sm text-muted-foreground">
          It took me my whole life to learn to draw like a child.
        </p>
        <p className="pt-1 text-sm font-semibold text-muted-foreground">
          -Pablo Picasso
        </p>
      </div>
    </div>
  )
}

const CommunityPageCard = () => {
  return (
    <div>
      {dummyData.map((data, index) => (
        <CommunityPageCardItem
          key={index}
          name={data.name}
          members={data.members}
          dp={data.dp}
        />
      ))}
    </div>
  )
}
export default CommunityPageCard
