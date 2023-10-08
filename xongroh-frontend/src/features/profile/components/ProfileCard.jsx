import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'
import useAuth from '@/hooks/useAuth'

const ProfileCardItem = ({ name, cover, dp, creations, supporting, bio, isCurrentUser }) => {
  const navigate = useNavigate()
  const [buttonText, setButtonText] = useState('Support')
  const handleButtonClick = () => {
    setButtonText((prevButtonText) => (prevButtonText === 'Support' ? 'Supporting' : 'Support'))
  }

  return (
    <div className="overflow-hidden">
      <div className="header mb-6 rounded-b-3xl bg-[#FAFAFA] pb-4 shadow-lg">
        <div className="flex flex-col">
          <img src={cover} className="h-40 object-cover" alt="Cover" />
          <div className="header flex flex-col items-center rounded-b-3xl px-3 pb-6 pt-5 shadow-card">
            <div className="-mb-10 flex w-full flex-row justify-around">
              <div className="text-center">
                <div className="font-bold">{creations}</div>
                <div className="text-sm font-medium text-muted-foreground">Creations</div>
              </div>
              <img src={dp} className="relative bottom-16 h-24 w-24 rounded-full" alt="Profile" />
              <div className="text-center">
                <div className="font-bold">{supporting}</div>
                <div className="text-sm font-medium text-muted-foreground">Supporting</div>
              </div>
            </div>

            <div className="pb-2 pt-6 text-xl font-bold">{name}</div>
            <p className="px-5 pb-10 text-center text-sm text-muted-foreground">{bio}</p>

            <div className="flex w-full flex-row justify-around">
              {isCurrentUser ? (
                <Button
                  variant="normal"
                  size="normal"
                  className="text-secondary-foreground"
                  onClick={() => navigate('edit')}
                >
                  Edit Profile
                </Button>
              ) : buttonText === 'Support' ? (
                <Button variant="normal" size="normal" onClick={handleButtonClick}>
                  {buttonText}
                </Button>
              ) : (
                <>
                  <Button variant="normal" size="normal" className="text-secondary-foreground">
                    Message
                  </Button>
                  <Button
                    variant="normal"
                    size="normal"
                    className="text-secondary-foreground"
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                  </Button>
                </>
              )}
              <Link to="/portfolio">
                <Button variant="normal" size="normal" className="font-semibold text-secondary-foreground">
                  Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileCard = () => {
  const { id } = useParams()
  const { userId } = useAuth()

  let isCurrentUser = false
  if (id === userId) {
    isCurrentUser = true
  }

  const { data, isLoading: userLoading, isSuccess: userSuccess, isError: userError } = useGetUserByIdQuery(id)

  if (userLoading) {
    return <div>Loading...</div>
  }

  if (userError) {
    return <div>Error loading user data</div>
  }

  if (userSuccess) {
    return (
      <ProfileCardItem
        name={data.username}
        cover={data.cover}
        dp={data.profilePicture}
        creations={data.posts.length}
        supporting={Object.keys(data.supporting).length}
        bio={data.bio}
        isCurrentUser={isCurrentUser}
      />
    )
  }

  return null
}
export default ProfileCard
