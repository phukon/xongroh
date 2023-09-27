import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'
import { Link } from 'react-router-dom'

const SearchCard = () => {
  return (
    <div className="overflow-hidden">
      <div className="header mb-6 rounded-b-3xl bg-[#FAFAFA] pb-6 shadow-lg ">
        <div className="flex items-center space-x-2 p-5 pb-4 pt-6">
          <Input type="text" placeholder="Search..." />
          <Link to="/searchresult">
            <Button variant="outline" size="icon">
              <img className="h-4 w-4" src={Assets.search} alt="Search" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchCard
