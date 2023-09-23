import { useEffect } from 'react'
import { useVerifyUserMutation } from '@/features/auth/authApiSlice'
import { useParams, useNavigate } from 'react-router-dom'

import ProfileCard from '@/features/profile/components/ProfileCard'
import ProfileFeed from '@/features/profile/components/ProfileFeed'

const Profile = () => {
  const navigate = useNavigate()
  const { id } = useParams()


  const [verifyUser] = useVerifyUserMutation()

  const handleVerifyUser = async () => {
    try {
      await verifyUser({ userId: id }).unwrap()
    } catch (error) {
      if (error.status === 404 || 400) {
        console.error('User not found')
        navigate('/dash/profile/user-not-found')
      }
    }
  }

  useEffect(() => {
    if (id) {
      handleVerifyUser()
    }
  }, [id])

  return (
    <div>
      <ProfileCard />
      <ProfileFeed />
    </div>
  )
}

export default Profile
