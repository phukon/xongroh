import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const CommunityPostCard = ({ communityPosts }) => {
  const [likeStatus, setLikeStatus] = useState(
    communityPosts.map((post) => post.interaction === 'Liked'),
  )

  const handleButtonClick = (index) => {
    setLikeStatus(
      likeStatus.map((status, i) => (i === index ? !status : status)),
    )
  }

  return (
    <div>
      {communityPosts &&
        communityPosts.map((post, index) => (
          <Card key={index} className="mt-5">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <Button variant="normal" size="normal">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="h-9 w-9 rounded-full"
                        src={post.dp}
                        alt="profile"
                      />
                    </div>
                    <div className="pl-4">{post.name}</div>
                  </div>
                </Button>
                <div className='pr-2'>
                  <p className="text-xs font-semibold text-muted-foreground">
                    {post.type}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-0">
              <div className="pb-3">
                <h1 className="line-clamp-2 text-sm font-semibold">
                  {post.title}
                </h1>
              </div>
              <div>
                <p className="line-clamp-8 text-sm text-muted-foreground">
                  {post.content}
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex">
                <div>
                  <Button
                    variant="normal"
                    size="normal"
                    onClick={() => handleButtonClick(index)}
                    className={` ${
                      likeStatus[index] ? 'text-secondary-foreground' : ''
                    }`}
                  >
                    {likeStatus[index]
                      ? `Likes (${communityPosts[index].likes})`
                      : 'Like'}
                  </Button>
                </div>
                <div className="pl-3 ">
                  <Button
                    variant="normal"
                    size="normal"
                    className="text-secondary-foreground"
                  >
                    Responses ({post.responses})
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  )
}

export default CommunityPostCard
