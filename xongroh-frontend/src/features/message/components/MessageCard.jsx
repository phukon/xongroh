import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'
import Assets from '@/assets/Assets' // Import your image asset

const MessageCard = ({ messageLists }) => {
  return (
    <div>
      {messageLists &&
        messageLists.map((post, index) => (
          <Link to={`/msg/${post.id}`} key={`${post.id}_${index}`}>
            {' '}
            {/* Use a unique key */}
            <Card className="mt-5">
              <div className="flex items-center justify-between p-3 py-5">
                <div>
                  <CardHeader className="p-0">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-full "
                        src={post.dp}
                        alt="profile"
                      />
                      <div className="px-3">
                        <div className="flex items-center">
                          <CardTitle className="line-clamp-1 text-base">
                            {post.name}
                          </CardTitle>
                          <div>
                            <p className="pl-2 text-xs font-semibold text-muted-foreground ">
                              +{post.unread}
                            </p>
                          </div>
                        </div>
                        <CardDescription className="text-sm line-clamp-1 font-semibold">
                          {post.lastmsg.length > 40 ? (
                            <>{post.lastmsg.slice(0,40)}...
                            </> ) : <>
                            {post.lastmsg}
                            </> }
                            
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </div>
                <div className='w-20'>
                  
                    <div className="flex flex-col items-center">
                      <div>
                        <img src={Assets.greendot} alt="Green Dot" />
                      </div>
                      <div>
                        <p className="text-xs">{post.time}</p>
                      </div>
                    </div>
                 
                </div>
              </div>
            </Card>
          </Link>
        ))}
    </div>
  )
}

export default MessageCard
