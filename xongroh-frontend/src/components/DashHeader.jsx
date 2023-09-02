import React from 'react'
import Assets from '@/assets/Assets'

const DashHeader = ({ bgColor }) => {
  const defaultBgColor = '#F5F0BB'

  return (
    <div
      className={`header shadow-card bg-[${
        bgColor || defaultBgColor
      }] px-5 -mt-2 -mb-2`}
    >
      <div className="header-text flex flex-row items-center justify-between py-5">
        <h1 className="text-3xl font-bold">header v0.2</h1>
        <div className="flex flex-row space-x-5">
          <img className="h-8 w-8" src={Assets.bell} alt="notification" />
          <img className="h-8 w-8" src={Assets.chat} alt="chat" />
        </div>
      </div>
    </div>
  )
}

export default DashHeader
