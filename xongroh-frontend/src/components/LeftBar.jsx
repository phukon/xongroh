import React, { useState, useEffect } from 'react'
import Assets from '@/assets/Assets'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

import { useSendLogoutMutation } from '@/features/auth/authApiSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const LeftBar = () => {
  const { userId } = useAuth()
  const location = useLocation()
  const [activeNav, setActiveNav] = useState('')

  const handleNavClick = (nav) => {
    setActiveNav(nav)
  }

  React.useEffect(() => {
    setActiveNav(location.pathname)
  }, [location])

  return (
    <nav className="full-w sticky top-0 mr-3 flex h-screen flex-col bg-[#FAFAFA] p-6  pt-8 shadow-lg">
      <div className="flex items-center space-x-4">
        <img className="h-12 w-12" src={Assets.xongroh} alt="Home" />
        <span className="text-2xl font-bold">xongroh</span>
      </div>
      <div className="px-6">
        <div className="pb-4 pt-14">
          <Link to="/dash" onClick={() => handleNavClick('/dash')} className="flex items-center space-x-2">
            <img className="h-8 w-8 " src={activeNav === '/dash' ? Assets.homeActive : Assets.home} alt="Home" />
            <span className={activeNav === '/dash' ? 'font-medium text-primary' : 'font-medium'}>Home</span>
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/dash/search"
            onClick={() => handleNavClick('/dash/search')}
            className="flex items-center space-x-2"
          >
            <img
              className="h-8 w-8"
              src={activeNav === '/dash/search' ? Assets.searchActive : Assets.search}
              alt="Search"
            />
            <span className={activeNav === '/dash/search' ? 'font-medium text-primary' : 'font-medium'}>Search</span>
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to="/dash/communities"
            onClick={() => handleNavClick('/dash/communities')}
            className="flex items-center space-x-2"
          >
            <img
              className="h-8 w-8"
              src={activeNav === '/dash/communities' ? Assets.worldActive : Assets.world}
              alt="Communities"
            />
            <span className={activeNav === '/dash/communities' ? 'font-medium text-primary' : 'font-medium'}>
              Community
            </span>
          </Link>
        </div>
        <div className="pb-4">
          <Link
            to={`/dash/profile/${userId}`}
            onClick={() => handleNavClick('/dash/profile')}
            className="flex items-center space-x-2"
          >
            <img
              className="h-8 w-8"
              src={activeNav === '/dash/profile' ? Assets.profileActive : Assets.profile}
              alt="Profile"
            />
            <span className={activeNav === '/dash/profile' ? 'font-medium text-primary' : 'font-medium'}>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default LeftBar
