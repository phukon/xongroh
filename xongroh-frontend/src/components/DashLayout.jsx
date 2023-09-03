import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import DashHeader from '@/components/DashHeader'
import DashFooter from '@/components/DashFooter'

const DashLayout = () => {
  // Get the current location from react-router-dom
  const location = useLocation()

  // Define a function to determine the background color based on the URL
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case '/dash':
        return '#F5F0BB'
      case '/dash/search':
        return '#CDF0EA'
      case '/dash/communities':
        return '#B8E8FC'
      case '/dash/profile':
        return '#C8E4B2'
      default:
        return '#FFFF'
    }
  }

  return (
    <>
      {/* Pass the background color as a prop to DashHeader */}
      <DashHeader bgColor={getBackgroundColor()} />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  )
}

export default DashLayout
