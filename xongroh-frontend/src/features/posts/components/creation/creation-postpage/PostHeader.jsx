import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'

const PostHeader = ({ postData }) => {
  return (
    <div className="flex justify-between px-4">
      <div>
        <Button variant="normal" size="normal">
          <div className="flex items-center">
            <div>
              <img
                className="h-9 w-9 rounded-full"
                src={postData.dp}
                alt="profile"
              />
            </div>
            <div className="pl-4">{postData.name}</div>
          </div>
        </Button>
      </div>
      <div>
        <img src={Assets.more} alt="more" className="w-8 pt-1" />
      </div>
    </div>
  )
}

export default PostHeader
