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
import { useLikePostMutation, useSavePostMutation } from '@/features/posts/postsApiSlice'
import useAuth from '@/hooks/useAuth'

const CreationPostPage = () => {
  const { postId } = useParams()
  const { userId } = useAuth()

  const [likePost, { data, isLoading, isSuccess, isError, error }] = useLikePostMutation()

  const [savePost, { data: saveData, isLoading: saveLoading, isSuccess: saveSuccess, isError: saveError }] =
    useSavePostMutation()

  const {
    data: post,
    isLoading: postLoading,
    isSuccess: postSuccess,
    isError: postError,
  } = useGetPostByIdQuery(postId ? postId : null)

  const [activeTab, setActiveTab] = useState('comments')
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [numberOfLikes, setNumberOfLikes] = useState(0)

  useEffect(() => {
    if (postSuccess) {
      if (post.likes && post.likes.hasOwnProperty(userId)) {
        setIsLiked(true)
      } else {
        setIsLiked(false)
      }

      const likeCount = Object.keys(post.likes).length
      setNumberOfLikes(likeCount)
    }
  }, [postSuccess, userId])

  useEffect(() => {
    if (postSuccess) {
      if (post.saves && post.saves.hasOwnProperty(userId)) {
        setIsSaved(true)
      } else {
        setIsSaved(false)
      }
    }
  }, [postSuccess, userId])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        await likePost({ postId: post._id })
        setIsLiked(false)
        setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes - 1)
      } else {
        await likePost({ postId: post._id })
        setIsLiked(true)
        setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes + 1)
      }
    } catch (error) {
      console.error('Error liking/unliking post:', error)
    }
  }

  const handleShareClick = () => {
    // Implement your share logic here
  }

  const handleSaveClick = async () => {
    try {
      if (isSaved) {
        await savePost({ postId: post._id })
        setIsSaved(false)
      } else {
        await savePost({ postId: post._id })
        setIsSaved(true)
      }
    } catch (error) {
      console.error('Error saving/unsaving post:', error)
    }
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
        {postSuccess && (
          <div className="mx-3 flex overflow-x-scroll whitespace-nowrap pb-2 pt-4">
            <Tab
              tabName="comments"
              tabText="Comments "
              count={post.comments.length}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />
            <Tab
              tabName="feedback"
              tabText="Feedbacks "
              count={post.feedbacks.length}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />
          </div>
        )}

        <div className="mx-4 mt-2 text-lg font-normal text-muted-foreground ">
          {postSuccess && (
            <>
              {activeTab === 'comments' && (
                <CommentsContent postId={post._id} currentUserId={userId} comments={post.comments} />
              )}
              {activeTab === 'feedback' && (
                <FeedbackContent postId={post._id} currentUserId={userId} feedbacks={post.feedbacks} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreationPostPage
