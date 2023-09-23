import React, { Component } from 'react'
import CreationPostCard from '@/features/posts/components/creation/CreationPostCard'

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
      activeTab: 'new',
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
          {this.renderTab('new', 'New')}
          {this.renderTab('popular', 'Popular')}
          {this.renderTab('saved', 'Saved')}
        </div>

        <div className="m-4 text-lg font-normal text-muted-foreground ">
          {activeTab === 'new' && this.renderNewContent()}
          {activeTab === 'popular' && this.renderPopularContent()}
          {activeTab === 'saved' && this.renderSavedContent()}
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

  renderNewContent() {
    return (
      <div>
        <CreationPostCard />
      </div>
    )
  }

  renderPopularContent() {
    return (
      <div>
        <CreationPostCard />
      </div>
    )
  }

  renderSavedContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Saved</CardTitle>
            <CardDescription>No saved posts found.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

export default FilterTabs
