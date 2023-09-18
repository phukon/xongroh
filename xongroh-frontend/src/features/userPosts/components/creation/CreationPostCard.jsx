import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Assets from '@/assets/Assets'
import { Button } from '@/components/ui/button'

// Dummy data 
const creationPosts = [
  {
    name: 'Rupam Bora',
    dp: Assets.user1,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. by the readable content of a word word word The point, as opposed to using 'Content here, content here', making it look like packages packages packages readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    interactions: '1.9K',
    title: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search',
  },
  {
    name: 'Riki Phukan',
    dp: Assets.user2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    interactions: '800',
    title:
      'Another example post with dynamic content and title. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Komolika Baidew',
    dp: Assets.user3,
    content:
      'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    interactions: '16.6k',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const CreationPostCard = () => {
  return (
    <div>
      {creationPosts.map((post, index) => (
        <Card key={index} className="mt-5">
          <CardHeader className="p-4">
            <div>
              <Button variant="normal" size="normal">
                <div className="flex items-center">
                  <div>
                    <img
                      className="h-9 rounded-full"
                      src={post.dp}
                      alt="profile"
                    />
                  </div>
                  <div className="pl-4">{post.name}</div>
                </div>
              </Button>
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
      ))}
    </div>
  )
}

export default CreationPostCard
