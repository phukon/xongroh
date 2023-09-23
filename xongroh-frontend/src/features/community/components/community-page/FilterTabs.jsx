import React, { Component } from 'react'
import CommunityPostList from '@/features/posts/components/community/CommunityPostList'

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
      activeTab: 'new', // Default active tab
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div>
        <div className="mx-3 flex overflow-x-scroll whitespace-nowrap">
          {this.renderTab('new', 'New')}
          {this.renderTab('popular', 'Popular')}
          {this.renderTab('discussion', 'Discussion')}
          {this.renderTab('poll', 'Poll')}
          {this.renderTab('help', 'Help')}
        </div>

        <div className="m-4 text-lg font-normal text-muted-foreground ">
          {activeTab === 'new' && this.renderNewContent()}
          {activeTab === 'popular' && this.renderPopularContent()}
          {activeTab === 'discussion' && this.renderDiscussionContent()}
          {activeTab === 'poll' && this.renderPollContent()}
          {activeTab === 'help' && this.renderHelpContent()}
        </div>
      </div>
    )
  }

  renderTab(tabName, tabText) {
    const { activeTab } = this.state
    const isActive = activeTab === tabName

    return (
      <div
        className={`px-3 pb-5 ${
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

  renderNewContent() {
    return (
      <div>
        <CommunityPostList />
      </div>
    )
  }

  renderPopularContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Art</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  renderDiscussionContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Writing</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  renderPollContent() {
    return (
      <div>
        <Card className="justify-center">
          <CardHeader>
            <CardTitle>Music</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  renderHelpContent() {
    return (
      <div>
        <Card className="justify-center">
          <CardHeader>
            <CardTitle>Photography</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

export default FilterTabs
