import HomeCard from '@/features/home/components/HomeCard'
import HomeFeed from '@/features/home/components/home-feed/HomeFeed'
import CreatePostButton from '@/features/home/components/CreatePostButton'


const Home = () => {
  return (
    <div className="overflow-hidden ">
      <CreatePostButton />
      <HomeCard />
      <HomeFeed />
    </div>
  )
}

export default Home
