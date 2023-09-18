import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'

const SearchCard = () => {
  return (
    <div className="overflow-hidden">
      <div className="header mb-6 rounded-b-3xl bg-[#FAFAFA] pb-6 shadow-lg ">
      <h1 className="mx-5 pt-8 text-2xl font-bold">Find</h1>
      <div className="m-5 flex items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button variant="outline" size="icon">
          <img className="h-4 w-4" src={Assets.search} alt="Search" />
        </Button>
      </div>
    </div>
    </div>
  )
}

export default SearchCard;
