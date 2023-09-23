import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Assets from '@/assets/Assets'
import { Link } from 'react-router-dom' 

const dummyData = [
  { name: 'Art Community', members: '100', dp: Assets.art, time: '6 mins' },
  {
    name: 'Cinematography Community',
    members: '999',
    dp: Assets.cinematography,
    time: '2 hrs',
  },
]

const MyCommunityProfileCardItem = ({ name, members, dp, time }) => {
  const handleButtonClick = () => {
    //logic
  }

  return (
    <Link to={`/communitypage`}>
      <Card className="mt-5">
        <div className="flex items-center justify-between p-3 py-5">
          <div>
            <CardHeader className="p-0">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full "
                  src={dp}
                  alt="profile"
                />
                <div className="pl-4">
                  <CardTitle className="line-clamp-1 text-sm">{name}</CardTitle>
                  <CardDescription className="text-xs">
                    Members: {members}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </div>
          <div>
            <CardContent className="p-0 pr-2">
              <div className="flex flex-col items-center ">
                <div>
                  <img src={Assets.greendot} alt="" />
                </div>
                <div>
                  <p className="text-xs">{time}</p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  )
}

const MyCommunityProfileCard = () => {
  return (
    <div className="m-4">
      {dummyData.map((data, index) => (
        <MyCommunityProfileCardItem
          key={index}
          name={data.name}
          members={data.members}
          dp={data.dp}
          time={data.time}
        />
      ))}
    </div>
  )
}

export default MyCommunityProfileCard
