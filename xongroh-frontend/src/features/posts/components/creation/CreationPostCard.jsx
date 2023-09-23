import React from 'react'
import { useGetPostsQuery } from '@/features/posts/postsApiSlice'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice' // Import the user query
import { Link } from 'react-router-dom'

const CreationPostCard = () => {
  const {
    data: creationPosts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery('Posts', {
    pollingInterval: 5 * 60 * 1000,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: true,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading posts: {error.message}</div>
  }

  if (isSuccess) {
    return (
      <div>
        {creationPosts.ids.map((postId) => (
          <PostCard
            key={postId}
            postId={postId}
            post={creationPosts.entities[postId]}
          />
        ))}
      </div>
    )
  }

  // Default fallback
  return null
}

const PostCard = ({ postId, post }) => {
  const {
    data: userData,
    isLoading: userLoading,
    isSuccess: userSuccess,
  } = useGetUserByIdQuery(post?.author)

  if (userLoading) {
    return <div>Loading...</div>
  }

  if (userSuccess) {
    const author = userData

    return (
      <Card className="mt-5">
        <CardHeader className="p-4">
          <div>
            <Link to={`profile/${author._id}`}>
              <Button variant="normal" size="normal">
                <div className="flex items-center">
                  <div>
                    <img
                      className="h-9 w-9 rounded-full"
                      src={author.profilePicture || ''}
                      alt="profile"
                    />
                  </div>
                  <div className="pl-4">{author.username}</div>
                </div>
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-0">
          <p className="line-clamp-8 text-sm text-muted-foreground">
            {post.content}
          </p>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center">
            <div>
              <Button variant="normal" size="normal">
                {post.interactions}
              </Button>
            </div>
            <div className="pl-3">
              <h1 className="line-clamp-2 text-sm font-semibold">
                {post.title}
              </h1>
            </div>
          </div>
        </CardFooter>
      </Card>
    )
  }

  // Default fallback
  return null
}

export default CreationPostCard
