import { useState, useEffect } from 'react'
import PostTimeStamp from '@/features/posts/components/creation/creation-postpage/PostTimeStamp'
import PostHeader from '@/features/posts/components/creation/creation-postpage/PostHeader'
import PostContent from '@/features/posts/components/creation/creation-postpage/PostContent'
import PostActions from '@/features/posts/components/creation/creation-postpage/PostActions'
import Tab from '@/features/posts/components/creation/creation-postpage/Tabs'
import CommentsContent from '@/features/posts/components/creation/creation-postpage/CommentContent'
import FeedbackContent from '@/features/posts/components/creation/creation-postpage/FeedbackContent'
import { useGetPostByIdQuery } from '@/features/posts/postsApiSlice'

import { useParams } from 'react-router-dom'
import { useLikePostMutation } from '@/features/posts/postsApiSlice'
import useAuth from '@/hooks/useAuth'

const CreationPostPage = () => {
  const { postId } = useParams()
  const { userId } = useAuth()

  const [likePost, { data, isLoading, isSuccess, isError, error }] =
    useLikePostMutation()

  const {
    data: post,
    isLoading: postLoading,
    isSuccess: postSuccess,
    isError: postError,
  } = useGetPostByIdQuery(postId ? postId : null)

  const [activeTab, setActiveTab] = useState('comments')
  const [isLiked, setIsLiked] = useState(false) // Initialize as false
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    if (postSuccess && post.likes && post.likes.hasOwnProperty(userId)) {
      setIsLiked(true)
      const initialNumberOfLikes = Object.keys(post.likes).length
      setNumberOfLikes(initialNumberOfLikes)
    } else if (postSuccess && post.likes) {
      const initialNumberOfLikes = Object.keys(post.likes).length
      setNumberOfLikes(initialNumberOfLikes)
      setIsLiked(false)
    } else {
      setIsLiked(false)
    }
  }, [postSuccess, userId])

  // const initialNumberOfLikes = post?.likes ? Object.keys(post.likes).length : 0
  const [numberOfLikes, setNumberOfLikes] = useState(0)

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLikeClick = async () => {
    if (!isLoading) {
      try {
        if (isLiked) {
          await likePost({ postId: post._id, userId: userId })
          setIsLiked(false)
          setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes - 1)
        } else {
          await likePost({ postId: post._id, userId: userId })
          setIsLiked(true)
          setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes + 1)
        }
      } catch (error) {
        console.error('Error liking/unliking post:', error)
      }
    }
  }

  const handleShareClick = () => {
    // Implement your share logic here
  }

  const handleSaveClick = () => {
    setIsSaved((prevIsSaved) => {
      const newSaves = String(parseInt(post.saves, 10) + (prevIsSaved ? -1 : 1))
      return !prevIsSaved
    })
  }

  return (
    <div className="pt-6 pb-20">
      {postSuccess && (
        <>
          <PostHeader postData={post} />
          <PostTimeStamp timestamp={post.timestamp} />
          <PostContent postData={post} />
          <PostActions
            postData={post}
            isLiked={isLiked}
            isSaved={isSaved}
            onLikeClick={handleLikeClick}
            onSaveClick={handleSaveClick}
            onShareClick={handleShareClick}
            numberOfLikes={numberOfLikes}
          />
        </>
      )}

      <div>
        <div className="mx-3 flex overflow-x-scroll whitespace-nowrap pb-2 pt-4">
          <Tab
            tabName="comments"
            tabText="Comments "
            // count={post.comments}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
          <Tab
            tabName="feedback"
            tabText="Feedbacks "
            // count={post.feedback}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
        </div>

        <div className="mx-4 mt-2 text-lg font-normal text-muted-foreground ">
          {activeTab === 'comments' && <CommentsContent />}
          {activeTab === 'feedback' && <FeedbackContent />}
        </div>
      </div>
    </div>
  )
}

export default CreationPostPage
