import Assets from '@/assets/Assets'
import CommunityPostCard from '@/features/posts/components/community/CommunityPostCard'

// Dummy data
const communityPosts = [
  {
    name: 'Rupam Bora',
    dp: Assets.user1,
    title:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. by the readable content of a word word word The point, as opposed to using 'Content here, content here', making it look like packages packages packages readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    interaction: 'Like',
    likes: '1.7k',
    responses: '56',
    type: 'Discussion',
  },
  {
    name: 'Riki Phukan',
    dp: Assets.user2,
    title:
      'Another example post with dynamic content and title. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    interaction: 'Liked',
    likes: '400',
    responses: '25',
    type: 'Poll',
  },
  {
    name: 'Komolika Baidew',
    dp: Assets.user3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content:
      'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    interaction: 'Like',
    likes: '6.2k',
    responses: '1.5k',
    type: 'Help',
  },
]

const CommunityPostList = () => {
  return (
    <div>
      <CommunityPostCard communityPosts={communityPosts} />
    </div>
  )
}

export default CommunityPostList
