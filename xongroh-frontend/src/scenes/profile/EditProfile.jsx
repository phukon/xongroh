/* 
  I didn't use useState to manage the input values because
  I'm also trying to preset the data in the input fields from
  the server. This can result in the values being undefined
  while the data loads, making the controlled inputs uncontrolled
  and throwing an error.
  ~Riki
*/
import React, { useEffect, useState } from 'react'
import convertToBase64 from '@/utils/convert'
import { useParams } from 'react-router-dom'
import {
  useUpdateUserMutation,
  useGetUserByIdQuery,
} from '@/features/users/usersApiSlice'

const UserEdit = () => {
  const { id } = useParams()
  const {
    data: userDataQuery,
    isLoading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
  } = useGetUserByIdQuery(id)

  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation()

  const [profilePicture, setProfilePicture] = useState('')
  useEffect(() => {
    if (!userLoading && userDataQuery) {
      const { username, email, firstName, lastName } = userDataQuery
      document.getElementById('username').value = username || ''
      document.getElementById('email').value = email || ''
      document.getElementById('firstName').value = firstName || ''
      document.getElementById('lastName').value = lastName || ''
    }
  }, [userLoading, userDataQuery])

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0])
    setProfilePicture(base64)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedUserData = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      profilePicture: profilePicture || userDataQuery?.profilePicture,
      id,
    }
    updateUser(updatedUserData)
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 mb-16">
      <h2 className="text-2xl font-semibold mb-4">Edit User Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block font-medium">
            <img
              src={profilePicture || userDataQuery?.profilePicture}
              alt="profilePicture"
            />
            Profile Picture:
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={onUpload}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-medium">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        {isSuccess && <p>Update successful!</p>}
        {isError && <p>Error: {error.message}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
        >
          {isLoading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  )
}

export default UserEdit
