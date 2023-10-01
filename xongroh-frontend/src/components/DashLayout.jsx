import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from '@/components/DashHeader'
import DashFooter from '@/components/DashFooter'
import DesktopBarLeft from '@/components/DesktopBarLeft'
import DesktopBarRight from '@/components/DesktopBarRight'

const DashLayout = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {isDesktop ? (
        <div className="flex flex-row">
          <div className="w-1/3">
            <DesktopBarLeft />
          </div>
          <div className="w-1/2">
            <Outlet />
          </div>
          <div className="w-1/3">
            <DesktopBarRight />
          </div>
        </div>
      ) : (
        <>
          <DashHeader />
          <div className="dash-container">
            <Outlet />
          </div>
          <DashFooter />
        </>
      )}
    </>
  )
}

export default DashLayout
