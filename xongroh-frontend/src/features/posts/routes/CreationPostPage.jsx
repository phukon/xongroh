import React from 'react'
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

  const [activeTab, setActiveTab] = React.useState('comments')
  const [isLiked, setIsLiked] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => {
      if (prevIsLiked) {
        const updatedLikes = post.likes.filter((like) => like !== userId)
        likePost({ postId: post._id, userId: userId })
        return !prevIsLiked
      } else {
        const updatedLikes = [...post.likes, userId]
        likePost({ postId: post._id, userId: userId })
        return !prevIsLiked
      }
    })
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
          <PostContent postData={post} />
          <PostActions
            postData={post}
            isLiked={isLiked}
            isSaved={isSaved}
            onLikeClick={handleLikeClick}
            onSaveClick={handleSaveClick}
            onShareClick={handleShareClick}
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
