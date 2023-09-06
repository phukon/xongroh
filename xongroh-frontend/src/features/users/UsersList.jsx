import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetUsersQuery } from '@/features/users/usersApiSlice'

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery('usersList', {
    pollingInterval: 5*60*1000,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: true,
  })

  let tableContent = null

  if (isLoading) {
    tableContent = <p>Loading...</p>
  }

  if (isError) {
    tableContent = <p className="errmsg">{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids, entities } = users

    tableContent = ids?.length ? (
      ids.map((userId) => (
        <li key={userId}>
          <Link to={`/dash/users/${userId}`}>{entities[userId].username}</Link>
        </li>
      ))
    ) : (
      <p>No users found.</p>
    )
  }

  return (
    <section>
      <h2>Users</h2>
      <ul>{tableContent}</ul>
    </section>
  )
}

export default UsersList
