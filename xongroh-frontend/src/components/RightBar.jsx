import React, { useState } from 'react'
import Assets from '@/assets/Assets'
import { Link, useLocation } from 'react-router-dom'
// import CommunityProfileList from '@/features/community/components/explore/CommunityProfileList'


const communityPopulars = [
  { name: 'Art Community', members: '100', dp: Assets.art },
  {
    name: 'Cinematography Community',
    members: '999',
    dp: Assets.cinematography,
  },
  { name: 'Music Community', members: '12.6K', dp: Assets.music },
  { name: 'Photography Community', members: '2.6K', dp: Assets.photography },
]

const RightBar = () => {
  return (
    <nav className="w-2/7 sticky top-0 ml-3 flex  h-screen flex-col bg-[#FAFAFA] p-1 pt-6 shadow-lg overflow-y-scroll ">
      <div className="flex flex-col px-6">
        <div className="py-4">
          <Link to="notifications" className="flex items-center space-x-2">
            <img className="h-8 w-8" src={Assets.bell} alt="notification" />
            <span className="font-medium">Notifications</span>
          </Link>
        </div>
        <div className="pb-4">
          <Link to="messages" className="flex items-center space-x-2">
            <img className="h-8 w-8" src={Assets.chat} alt="chat" />
            <span className="font-medium">Messages</span>
          </Link>
        </div>
      </div>
      <div className="px-4">
        <h2 className="pt-8 text-lg font-bold">Popular Communities</h2>
    <div className="pt-8 lg:columns-1" >
        {/* <CommunityProfileList communityCards={communityPopulars} /> */}
        </div>
       
      </div>
    </nav>
  )
}

export default RightBar
