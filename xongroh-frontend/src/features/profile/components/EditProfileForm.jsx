import React, { useEffect, useState } from 'react'
import convertToBase64 from '@/utils/convert'
import { useParams } from 'react-router-dom'
import {
  useUpdateUserMutation,
  useGetUserByIdQuery,
} from '@/features/users/usersApiSlice'

const EditProfileForm = () => {
  const { id } = useParams()
  const {
    data: userDataQuery,
    isLoading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
  } = useGetUserByIdQuery(id)

  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    profilePicture: '',
    cover: '',
  })

  useEffect(() => {
    if (!userLoading && userDataQuery) {
      setFormData({
        username: userDataQuery.username || '',
        email: userDataQuery.email || '',
        firstName: userDataQuery.firstName || '',
        lastName: userDataQuery.lastName || '',
        profilePicture: userDataQuery.profilePicture || '',
        cover: userDataQuery.cover || '',
      })
    }
  }, [userLoading, userDataQuery])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleProfilePictureUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0])
    setFormData({
      ...formData,
      profilePicture: base64,
    })
  }

  const handleCoverUpload = async (e) => {
    const base64Cover = await convertToBase64(e.target.files[0])
    setFormData({
      ...formData,
      cover: base64Cover,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser({
      ...formData,
      id,
    })
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 mb-16">
      <h2 className="text-2xl font-semibold mb-4">Edit User Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block font-medium">
            <img
              src={formData.profilePicture || userDataQuery?.profilePicture}
              alt="profilePicture"
            />
            Profile Picture:
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleProfilePictureUpload}
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
            value={formData.username}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.firstName}
            onChange={handleInputChange}
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
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cover" className="block font-medium">
            <img src={formData.cover || userDataQuery?.cover} alt="cover" />
            Cover Image:
          </label>
          <input
            type="file"
            id="cover"
            name="cover"
            onChange={handleCoverUpload}
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

export default EditProfileForm
