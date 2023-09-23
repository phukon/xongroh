import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'

const dummyData = [
  {
    name: 'Rupam Bora',
    username: 'rupambora',
    dp: Assets.user1,
    description:
      'Hi, I am a photographer based in Assam, India. I specialize in outdoors photography and I am known for my unique style and approach.',
  },
]

const PortfolioCardItem = ({ name, username, dp, description }) => {
  return (
   
      <div className=" overflow-hidden header mb-10 rounded-b-3xl bg-[#FAFAFA] pb-6 shadow-lg ">
        <div>
          <div className="flex items-center justify-between px-6 py-4 pt-6">
            <div className="flex items-center">
              <img className="h-12 w-12 rounded-full " src={dp} alt="profile" />
              <div className="pl-4">
                <h1 className='font-semibold '>{name}</h1>
                <p className=' text-xs text-muted-foreground '>@{username}</p>
              </div>
            </div>
            <div>
              <Button variant="normal" size="normal">
                Enquire
              </Button>
            </div>
          </div>
          <div className='px-6 py-2'>
            <p className=' text-sm text-muted-foreground'>{description}</p>
          </div>
        </div>
      </div>
    
  )
}

const PortfolioCard = () => {
  return (
    <div>
      {dummyData.map((data, index) => (
        <PortfolioCardItem
          key={index}
          name={data.name}
          username={data.username}
          dp={data.dp}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default PortfolioCard
