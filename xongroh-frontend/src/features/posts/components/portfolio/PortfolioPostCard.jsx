import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const PortfolioPostCard = ({ portfolioPosts }) => {
  return (
    <div>
      {portfolioPosts &&
        portfolioPosts.map((post, index) => (
          <Card key={index} className="m-5">
            <CardHeader className="p-0 ">
              <img
                src={post.multimedia}
                alt="multimedia"
                className="mb-4 rounded-t-xl object-cover"
              />
            </CardHeader>
            <CardContent className="px-4 pb-0">
              <div className="pb-3">
                <h1 className="line-clamp-2 text-sm font-semibold">
                  {post.title}...
                </h1>
              </div>
              <div>
                <p className="mb-4  text-xs text-muted-foreground ">
                  {post.desc.length > 250 ? (
                    <>
                      {post.desc.slice(0, 249)}...
                      <Link to={`/post/${post.id}`} className="text-primary">
                      <Button variant="link" size="link">Read more</Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      {post.desc}... 
                      <Link to={`/post/${post.id}`} className="text-primary">
                        <Button variant="link" size="link">Read more</Button>
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}

export default PortfolioPostCard
