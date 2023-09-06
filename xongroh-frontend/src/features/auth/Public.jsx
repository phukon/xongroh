import React, { useState } from 'react'

const Public = () => {
  const [clickCount, setClickCount] = useState(0)

  const handleButtonClick = () => {
    setClickCount(clickCount + 1)
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center p-8">
        <h1 className="text-4xl font-semibold mb-4">
          Welcome to the Public Page
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a public page accessible to everyone.
        </p>
        <p className="text-2xl text-gray-600 mb-4">Click count: {clickCount}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4"
          onClick={handleButtonClick}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

export default Public
