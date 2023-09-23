import React, { useState } from 'react'
import { useAddNewPostMutation } from '@/features/posts/postsApiSlice'
import convertToBase64 from '@/utils/convert'
import useAuth from '@/hooks/useAuth'

const CreatePost = () => {
  const { userId } = useAuth()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    cover: null,
    author: userId,
  })

  const [createPost, { isLoading, isSuccess, isError, error }] =
    useAddNewPostMutation()

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target

    if (name === 'cover') {
      const base64 = await convertToBase64(files[0])
      setFormData({
        ...formData,
        [name]: base64,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const postData = {
        title: formData.title,
        content: formData.content,
        author: formData.author,
        cover: formData.cover,
      }

      await createPost(postData).unwrap()

      setFormData({
        title: '',
        content: '',
        cover: null,
        author: userId,
      })
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 mb-16">
      <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-medium">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cover" className="block font-medium">
            Cover Picture:
          </label>
          <input
            type="file"
            id="cover"
            name="cover"
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            accept="image/*"
          />
        </div>
        {isSuccess && <p>Post created successfully!</p>}
        {isError && <p>Error: {error.message}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
        >
          {isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost
