import React from 'react'
import Assets from '@/assets/Assets'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import { useSendLogoutMutation } from '@/features/auth/authApiSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

const DesktopBarLeft = () => {
  const { userId } = useAuth()
  const navigate = useNavigate()
  const [sendLogout, { isLoading, isSuccess, isError, error }] = useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>

  if (isError) return <p>Error: {error.data?.message}</p>

  return (
    <nav className="w-2/7 bg-[#FAFAFA] p-2 shadow-lg h-screen flex flex-col items-right pt-4">
      <div className="p-2">
        <img className="h-8 w-8" src={Assets.xongroh} alt="Home" />
      </div>
      <div className="p-2">
        <Link to="/dash" className="flex items-center space-x-2">
          <img className="h-8 w-8" src={Assets.home} alt="Home" />
          <span>Home</span>
        </Link>
      </div>
      <div className="p-2">
        <Link to="/dash/search" className="flex items-center space-x-2">
          <img className="h-8 w-8" src={Assets.search} alt="Search" />
          <span>Search</span>
        </Link>
      </div>
      <div className="p-2">
        <Link to="/dash/communities" className="flex items-center space-x-2">
          <img className="h-8 w-8" src={Assets.world} alt="Communities" />
          <span>Community</span>
        </Link>
      </div>
      <div className="p-2">
        <Link to={`/dash/profile/${userId}`} className="flex items-center space-x-2">
          <img className="h-8 w-8" src={Assets.profile} alt="Profile" />
          <span>Profile</span>
        </Link>
      </div>
      {/* Wrap the last three elements in a div with flex flex-col class */}
      <div className="flex flex-col">
        <div className="p-2">
          <Link to="notifications" className="flex items-center space-x-2">
            <img className="h-8 w-8" src={Assets.bell} alt="notification" />
            <span>Notifications</span>
          </Link>
        </div>
        <div className="p-2">
          <Link to="messages" className="flex items-center space-x-2">
            <img className="h-8 w-8" src={Assets.chat} alt="chat" />
            <span>Messages</span>
          </Link>
        </div>
        <div className="p-2">
          <button className="icon-button" title="Logout" onClick={sendLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default DesktopBarLeft
