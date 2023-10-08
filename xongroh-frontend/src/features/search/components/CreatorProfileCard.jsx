import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useGetUsersQuery, useSupportTriggerMutation } from '@/features/users/usersApiSlice'
import useAuth from '@/hooks/useAuth'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'

const CreatorProfileCardItem = ({ name, username, profilePicture, userId, currentUserId }) => {
  const [buttonText, setButtonText] = useState('Support')
  const [supportTrigger, { isLoading, isSuccess, isError, error }] = useSupportTriggerMutation()
  const {
    data,
    isLoading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
  } = useGetUserByIdQuery(currentUserId)

  useEffect(() => {
    if (data?.supporting.includes(userId)) {
      setButtonText('View')
    }
  }, [data, userId])

  const handleButtonClick = async () => {
    if (buttonText === 'Support') {
      await supportTrigger({ supportedUserId: userId })
      setButtonText('View')
    }
  }

  if (userId === currentUserId) {
    return null
  }

  return (
    <Card className="mt-5">
      <div className="flex items-center justify-between p-3 py-5">
        <div>
          <CardHeader className="p-0">
            <div className="flex items-center">
              <Link to={`/dash/profile/${userId}`}>
                <img className="h-12 w-12 rounded-full" src={profilePicture} alt="profile" />
              </Link>
              <div className="pl-4">
                <CardTitle>{name}</CardTitle>
                <CardDescription>@{username}</CardDescription>
              </div>
            </div>
          </CardHeader>
        </div>
        <div>
          {userLoading ? (
            <p>Loading...</p>
          ) : (
            <CardContent className="p-0">
              {buttonText === 'View' ? (
                <Link to={`/profile/${username}`}>
                  <Button variant="normal" size="normal" onClick={handleButtonClick}>
                    {buttonText}
                  </Button>
                </Link>
              ) : (
                <Button variant="normal" size="normal" onClick={handleButtonClick}>
                  {buttonText}
                </Button>
              )}
            </CardContent>
          )}
        </div>
      </div>
    </Card>
  )
}

const CreatorProfileCard = () => {
  const { userId: currentUserId } = useAuth()

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery('usersList', {
    pollingInterval: 5 * 60 * 1000,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: true,
  })

  let content = null

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>
  }

  if (isSuccess) {
    content = users?.ids?.length ? (
      users.ids.map((userId) => (
        <div key={userId}>
          <CreatorProfileCardItem
            name={users.entities[userId].name}
            username={users.entities[userId].username}
            profilePicture={users.entities[userId].profilePicture}
            userId={userId}
            currentUserId={currentUserId}
          />
        </div>
      ))
    ) : (
      <p>No users found.</p>
    )
  }

  return <div>{content}</div>
}

export default CreatorProfileCard
