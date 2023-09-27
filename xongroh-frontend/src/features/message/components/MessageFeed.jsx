import React, { Component } from 'react'
import MessageList from '@/features/message/components/MessageList'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'


class MessageFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'inbox', // Default active tab
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div>
        <div className='pt-6'>
          <div className="mx-5 flex overflow-x-scroll whitespace-nowrap pb-2">
            {this.renderTab('inbox', 'Inbox')}
            {this.renderTab('enquiries', 'Enquiries')}
            {this.renderTab('requests', 'Requests')}
          </div>

          <div className="m-5 text-lg font-normal text-muted-foreground ">
            {activeTab === 'inbox' && this.renderInboxContent()}
            {activeTab === 'enquiries' && this.renderEnquiriesContent()}
            {activeTab === 'requests' && this.renderRequestsContent()}
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

  renderInboxContent() {
    return (
      <div>
        <MessageList />
      </div>
    )
  }

  renderEnquiriesContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Not Found</CardTitle>
            <CardDescription>No enquiry yet!</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
  renderRequestsContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Not Found</CardTitle>
            <CardDescription>No request yet!</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

export default MessageFeed
