import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import useAuth from '@/hooks/useAuth'

const CreatePostButton = () => {
  const { userId } = useAuth()

  return (
    <Link to={`profile/${userId}/createpost`}>
      <button
        className="fixed bottom-20 right-6 w-16 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 flex items-center justify-center cursor-pointer"
        title="Create Post"
      >
        <FontAwesomeIcon icon={faFeather} className="text-white" />
      </button>
    </Link>
  )
}

export default CreatePostButton
