import React, { Component } from 'react'
import NotificationList from '@/features/notification/components/NotificationList'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'


class NotificationFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'activity', // Default active tab
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div className='pt-6'>
        
        <div>
          <div className="mx-5 flex overflow-x-scroll whitespace-nowrap pb-2 justify-around">
            {this.renderTab('activity', 'Activity')}
            {this.renderTab('community', 'Community')}
            
          </div>

          <div className="m-5 text-lg font-normal text-muted-foreground ">
            {activeTab === 'activity' && this.renderActivityContent()}
            {activeTab === 'community' && this.renderCommunityContent()}
            
          </div>
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

  renderActivityContent() {
    return (
      <div>
        <NotificationList />
      </div>
    )
  }

  renderCommunityContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Not Found</CardTitle>
            <CardDescription>No community notifications yet!</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
  
}

export default NotificationFeed
