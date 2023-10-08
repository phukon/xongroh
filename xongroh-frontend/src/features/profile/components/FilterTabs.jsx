import React, { Component } from 'react'
import CreationPostCard from '@/features/posts/components/creation/CreationPostCard'
import TribeFeed from '@/features/profile/components/TribeFeed'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

class FilterTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'creation',
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div>
        <div className="mx-3 flex overflow-x-scroll whitespace-nowrap py-2">
          {this.renderTab('creation', 'Creations')}
          {this.renderTab('tribe', 'Tribe')}
          {this.renderTab('store', 'Store')}
          {this.renderTab('event', 'Events')}
        </div>

        <div className="m-4 text-lg font-normal text-muted-foreground ">
          {/* Display content based on the activeTab */}
          {activeTab === 'creation' && this.renderCreationContent()}
          {activeTab === 'tribe' && this.renderTribeContent()}
          {activeTab === 'store' && this.renderStoreContent()}
          {activeTab === 'event' && this.renderEventContent()}
          {/* Add more content divs and corresponding MongoDB queries */}
        </div>
      </div>
    )
  }

  renderTab(tabName, tabText) {
    const { activeTab } = this.state
    const isActive = activeTab === tabName

    return (
      <div
        className={` p-2 px-3 ${
          isActive
            ? 'font-semibold text-primary underline decoration-inherit decoration-solid underline-offset-8'
            : 'font-semibold'
        }`}
        onClick={() => this.handleTabClick(tabName)}
      >
        {tabText}
      </div>
    )
  }

  renderCreationContent() {
    return (
      <div className='pb-16'>
        <CreationPostCard type='profile'/>
      </div>
    )
  }

  renderTribeContent() {
    return (
      <div className="pb-16">
        <TribeFeed />
      </div>
    )
  }

  renderStoreContent() {
    return (
      <div className="pb-16">
        <Card>
          <CardHeader>
            <CardTitle>Store</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  renderEventContent() {
    return (
      <div className="pb-16">
        <Card className="justify-center">
          <CardHeader>
            <CardTitle>Events</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

export default FilterTabs
