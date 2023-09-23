import React, { Component } from 'react'
import CreationPostCard from '@/features/posts/components/creation/CreationPostCard'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

class DraftFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'creation', // Default active tab
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
            {this.renderTab('creation', 'Creations')}
            {this.renderTab('portfolio', 'Portfolio')}
          </div>

          <div className="m-5 text-lg font-normal text-muted-foreground ">
            {activeTab === 'creation' && this.renderCreationContent()}
            {activeTab === 'portfolio' && this.renderPortfolioContent()}
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

  renderCreationContent() {
    return (
      <div>
        {' '}
        <CreationPostCard />
      </div>
    )
  }

  renderPortfolioContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Not Found</CardTitle>
            <CardDescription>Drafts not found!</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

export default DraftFeed
