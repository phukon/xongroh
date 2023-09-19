import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
  const [showAlert, setShowAlert] = useState(true)

  const hideAlert = () => {
    setShowAlert(false)
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {showAlert && (
        <div className="bg-yellow-300 border-l-4 border-yellow-600 p-4 rounded-md mb-4 max-w-2xl w-full">
          <div className="flex items-center justify-between">
            <p className="text-yellow-900">
              A new database has been provisioned. That implies that the old data has been deleted.
              <b> So create an account and then login.</b>
            </p>
            <button
              className="text-red-600 hover:text-red-800"
              onClick={hideAlert}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-2xl p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-semibold mb-4">Public-2</h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a public page accessible to everyone.
        </p>

        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block"
        >
          Go to Auth Page
        </Link>
      </div>
    </div>
  )
}

export default Public
