import React from 'react'
import Assets from '@/assets/Assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useSendLogoutMutation } from '@/features/auth/authApiSlice'
import { useEffect } from 'react'

const DashHeader = ({ bgColor }) => {

  const navigate = useNavigate()

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>

  if (isError) return <p>Error: {error.data?.message}</p>

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
          <button className="icon-button" title="Logout" onClick={sendLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashHeader
