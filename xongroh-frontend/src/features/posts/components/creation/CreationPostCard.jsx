import { useGetPostsQuery } from '@/features/posts/postsApiSlice'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

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
    const { ids, entities } = creationPosts
    return (
      <div>
        {ids.map((postId) => (
          <Card key={postId} className="mt-5">
            <CardHeader className="p-4">
              <div>
                <Button variant="normal" size="normal">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="h-9 w-9 rounded-full"
                        src={entities[postId].cover || ''}
                        alt="profile"
                      />
                    </div>
                    <div className="pl-4">{entities[postId].author}</div>
                  </div>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-0">
              <p className="line-clamp-8 text-sm text-muted-foreground">
                {entities[postId].content}
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex items-center">
                <div>
                  <Button variant="normal" size="normal">
                    {entities[postId].interactions}
                  </Button>
                </div>
                <div className="pl-3">
                  <h1 className="line-clamp-2 text-sm font-semibold">
                    {entities[postId].title}
                  </h1>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  // Default fallback
  return null
}

export default CreationPostCard
