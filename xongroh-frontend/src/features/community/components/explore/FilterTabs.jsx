import React, { Component } from 'react'
import CommunityProfileCard from '@/features/community/components/explore/CommunityProfileCard'

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
      activeTab: 'all', // Default active tab
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
          {this.renderTab('all', 'All')}
          {this.renderTab('art', 'Art')}
          {this.renderTab('writing', 'Writing')}
          {this.renderTab('music', 'Music')}
          {this.renderTab('photography', 'Photography')}
          {this.renderTab('performing', 'Performing Arts')}
          {this.renderTab('cinematography', 'Cinematography')}
          {this.renderTab('craft', 'Crafts')}
          {this.renderTab('editing', 'Editing')}
        </div>

        <div className="m-4 text-lg font-normal text-muted-foreground ">
          {/* Display content based on the activeTab */}
          {activeTab === 'all' && this.renderAllContent()}
          {activeTab === 'art' && this.renderArtContent()}
          {activeTab === 'writing' && this.renderWritingContent()}
          {activeTab === 'music' && this.renderMusicContent()}
          {activeTab === 'photography' && this.renderPhotographyContent()}
          {activeTab === 'performing' && this.renderPerformingContent()}
          {activeTab === 'cinematography' && this.renderCinematographyContent()}
          {activeTab === 'craft' && this.renderCraftsContent()}
          {activeTab === 'editing' && this.renderEditingContent()}
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

  renderAllContent() {
    return (
      <div>
        <CommunityProfileCard/>
      </div>
    )
  }

  renderArtContent() {
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

  renderWritingContent() {
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

  renderMusicContent() {
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

  renderPhotographyContent() {
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

  renderPerformingContent() {
    return (
      <div>
        <Card className="justify-center">
          <CardHeader>
            <CardTitle>Performing Arts</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  renderCinematographyContent() {
    return (
      <div>
        <Card className="justify-center">
          <CardHeader>
            <CardTitle>Cinematography</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  renderCraftsContent() {
    return (
      <div>
        <Card className="justify-center">
          <CardHeader>
            <CardTitle>Crafts</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  renderEditingContent() {
    return (
      <div>
        <Card className="justify-center">
          <CardHeader>
            <CardTitle>Editing</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

export default FilterTabs
