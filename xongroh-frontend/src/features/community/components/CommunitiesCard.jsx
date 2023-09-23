import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Assets from '@/assets/Assets'
import PopularCommunityFeed from '@/features/community/components/explore/PopularCommunityFeed'
import MyCommunitiesFeed from '@/features/community/components/my-communities/MyCommunitiesFeed'
import { Link } from 'react-router-dom'

const CommunitiesCard = () => {
  const [activeTab, setActiveTab] = useState('My Communities')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="overflow-hidden">
      <div className="header mb-6 rounded-b-3xl bg-[#FAFAFA] px-5 pb-8 shadow-lg">
        <div className="flex items-center space-x-2 py-6">
          <Input type="text" placeholder="Search..." />
          <Link to="/commsearchresult">
            {' '}
            <Button variant="outline" size="icon">
              <img className="h-4 w-4" src={Assets.search} alt="Search" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-3 font-semibold">
          <Button
            variant={activeTab === 'Explore' ? 'normal' : 'link'}
            className={`${
              activeTab === 'Explore'
                ? ' text-secondary-foreground'
                : ' text-primary'
            }`}
            onClick={() => handleTabClick('Explore')}
          >
            Explore
          </Button>
          <Button
            variant={activeTab === 'My Communities' ? 'normal' : 'link'}
            className={`${
              activeTab === 'My Communities'
                ? 'text-secondary-foreground'
                : 'text-primary'
            }`}
            onClick={() => handleTabClick('My Communities')}
          >
            My Communities
          </Button>
        </div>
      </div>

      {/* Conditional rendering based on activeTab */}
      {activeTab === 'Explore' && (
        <div>
          <PopularCommunityFeed />
        </div>
      )}

      {activeTab === 'My Communities' && (
        <div>
          <MyCommunitiesFeed />
        </div>
      )}
    </div>
  )
}

export default CommunitiesCard
