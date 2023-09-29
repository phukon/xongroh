import React from 'react'

const PostTimeStamp = ({ timestamp }) => {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <div className="p-2 pl-5">
      <p className="text-gray-600 text-sm italic">
        {formatTimestamp(timestamp)}
      </p>
    </div>
  )
}

export default PostTimeStamp
