import PortfolioPostCard from '@/features/posts/components/portfolio/PortfolioPostCard'
import Assets from '@/assets/Assets'

// Dummy data
const portfolioPosts = [
  {
    multimedia: Assets.dummy2,
    title:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. by the readable content of a word word word The point, as opposed to using 'Content here, content here', making it look like packages packages packages readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
  },
  {
    multimedia: Assets.dummy1,
    title:
      'Another example post with dynamic content and title. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    multimedia: Assets.dummy3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const PortfolioPostList = () => {
  return (
    <div>
      <PortfolioPostCard portfolioPosts={portfolioPosts} />
    </div>
  )
}

export default PortfolioPostList
