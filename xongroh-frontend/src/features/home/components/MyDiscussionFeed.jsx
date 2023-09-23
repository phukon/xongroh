import React, { Component } from 'react'
import CommunityPostList from '@/features/posts/components/community/CommunityPostList'

class MyDiscussionFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'discussion', // Default active tab
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div className="pt-6">
        <div>
          <div className="mx-5 flex overflow-x-scroll whitespace-nowrap pb-2">
            {this.renderTab('discussion', 'Discussions')}
            {this.renderTab('poll', 'Poll')}
            {this.renderTab('help', 'Help')}
          </div>

          <div className="m-5 text-lg font-normal text-muted-foreground ">
            {activeTab === 'discussion' && this.renderDiscussionsContent()}
            {activeTab === 'poll' && this.renderPollContent()}
            {activeTab === 'help' && this.renderHelpContent()}
          </div>
        </div>{' '}
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

  renderDiscussionsContent() {
    return (
      <div>
        <CommunityPostList />
      </div>
    )
  }

  renderPollContent() {
    return (
      <div>
        <CommunityPostList />
      </div>
    )
  }
  renderHelpContent() {
    return (
      <div>
        <CommunityPostList />
      </div>
    )
  }
}

export default MyDiscussionFeed
