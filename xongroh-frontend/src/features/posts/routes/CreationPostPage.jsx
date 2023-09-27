import React, { useState } from 'react'
import PostHeader from '@/features/posts/components/creation/creation-postpage/PostHeader'
import PostContent from '@/features/posts/components/creation/creation-postpage/PostContent'
import PostActions from '@/features/posts/components/creation/creation-postpage/PostActions'
import Tab from '@/features/posts/components/creation/creation-postpage/Tabs'
import CommentContent from '@/features/posts/components/creation/creation-postpage/CommentContent'
import FeedbackContent from '@/features/posts/components/creation/creation-postpage/FeedbackContent'
import Assets from '@/assets/Assets'

const creationPostList = [
  {
    name: 'Rupam Bora',
    dp: Assets.user1,
    title:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum tellus bibendum vehicula imperdiet. Pellentesque venenatis, ante in consequat mollis, arcu velit cursus velit, eget semper ex nulla sit amet dui. Ut at dui id diam facilisis porta vitae vel nunc. Morbi cursus cursus sollicitudin. Etiam ex ex, elementum eu lorem eget, semper sagittis enim. Integer dui ipsum, auctor eget urna nec, sodales ullamcorper tellus. Aliquam urna urna, aliquam nec est pretium, auctor egestas velit. Suspendisse finibus in neque vel tincidunt. \n\nVestibulum scelerisque dignissim est ac pretium. Ut eget tempus arcu. Vivamus commodo, quam et dignissim congue, tellus elit convallis lacus, in condimentum dui magna quis sapien. Aenean nunc leo, semper ac cursus non, vulputate sit amet elit.Curabitur lorem lacus, pellentesque eu bibendum sed, imperdiet vitae sem. Vestibulum lacinia viverra molestie. Suspendisse venenatis vulputate ex, non tempor augue fermentum vitae. Proin in pulvinar massa, vel finibus sapien. Vestibulum vel pretium ligula. \n\nMorbi semper condimentum finibus. Cras eget volutpat elit. Cras egestas justo justo, at lobortis lorem vehicula non. Suspendisse vitae augue dapibus nulla maximus pharetra. Aliquam eget urna lacinia, accumsan quam eu, interdum justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ultrices tincidunt. Morbi mollis, justo a accumsan porta, quam felis varius tortor, eget suscipit justo risus a nibh. Fusce commodo quam quis sapien bibendum consequat. Curabitur ut pharetra nisl. Nulla sit amet nisi sapien. Sed vitae condimentum magna, nec lobortis lorem. Maecenas interdum porttitor mollis. Integer congue placerat elit, eu sollicitudin tellus porta non.',
    likes: '653',
    saves: '58',
    comment: '25',
    feedback: '6',
  },
]

const CreationPostPage = () => {
  const [activeTab, setActiveTab] = useState('comment')
  const [postData, setPostData] = useState(creationPostList[0])
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => {
      const newLikes = String(
        parseInt(postData.likes, 10) + (prevIsLiked ? -1 : 1)
      )
      setPostData((prevPostData) => ({ ...prevPostData, likes: newLikes }))
      return !prevIsLiked
    })
  }

  const handleShareClick = () => {}

  const handleSaveClick = () => {
    setIsSaved((prevIsSaved) => {
      const newSaves = String(
        parseInt(postData.saves, 10) + (prevIsSaved ? -1 : 1)
      )
      setPostData((prevPostData) => ({ ...prevPostData, saves: newSaves }))
      return !prevIsSaved
    })
  }

  return (
    <div className="pt-6 pb-20">
      <PostHeader postData={postData} />

      <PostContent postData={postData} />

      <PostActions
        postData={postData}
        isLiked={isLiked}
        isSaved={isSaved}
        onLikeClick={handleLikeClick}
        onSaveClick={handleSaveClick}
        onShareClick={handleShareClick}
      />

      <div>
        <div className="mx-3 flex overflow-x-scroll whitespace-nowrap pb-2 pt-4">
          <Tab
            tabName="comment"
            tabText="Comments "
            count={postData.comment}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
          <Tab
            tabName="feedback"
            tabText="Feedbacks "
            count={postData.feedback}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
        </div>

        <div className="mx-4 mt-2 text-lg font-normal text-muted-foreground ">
          {activeTab === 'comment' && <CommentContent />}
          {activeTab === 'feedback' && <FeedbackContent />}
        </div>
      </div>
    </div>
  )
}

export default CreationPostPage
