import React from 'react'
import { Link } from 'react-router-dom'

const UserNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-200 mb-4">
          User not found
        </h1>
        <p className="text-gray-300 mb-4">
          Sorry, the user you are looking for does not exist.
        </p>
        <Link to="/dash" className="text-blue-500 hover:underline">
          &larr; Go back to the Homepage.
        </Link>
      </div>
    </div>
  )
}

export default UserNotFound
