import Assets from '@/assets/Assets'
import ProfilePost from '@/components/ProfilePost'

const Profile = () => {
  return (
      <div className='bg-[#FFDEB4] overflow-hidden'>
        <div className='flex flex-col'>
          <img src={Assets.dummy1} className=' h-40 object-cover'/>
          <div className='header px-3 pt-5 pb-6 bg-[#F0D9FF] rounded-b-3xl flex flex-col items-center'>
              <div className='w-full flex flex-row -mb-10 justify-around'>
                <div className='text-center'>
                  <div className='font-bold'>25</div>
                  <div className='font-medium	text-sm'>Creations</div>
                </div>
                <img src={Assets.user2} className='relative bottom-16'/>
                <div className='text-center'>
                  <div className='font-bold'>25k</div>
                  <div className='font-medium	text-sm'>Supporters</div>
                </div>
              </div>
              
              <div className='font-bold text-xl pt-2 pb-2'>Mahindra Alpha Beta</div>
               <p className=' px-5 text-center pb-6 text-sm font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis a est dapibus posuere. Donec molestie risus ac elit imperdiet pretium. Phasellus volutpat nec ligula gfsjak...</p>
              
              <div className='w-full flex justify-center flex-row'>
                  <button className='border-2 px-3 py-1 mx-4 border-black rounded-3xl text-sm font-medium	 bg-[#F5F5F7]'>Support</button>
                  <button className='border-2 px-3 py-1 mx-4 border-black text-sm font-medium	 rounded-3xl bg-[#C8E4B2]'>Message</button>
          
              </div>
          </div>
        </div>

        <div className='p-2 pt-6 pb-2'>
          <div className='overflow-x-scroll whitespace-nowrap'>
              <div className='w-full justify-stretch flex flex-row font-semibold text-sm'>
                  <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 ml-3 mr-1 bg-[#C8E4B2]'>Portfolio</button>
                  <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 mx-1 bg-[#F5F5F7]'>Tribe</button>
                  <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 mx-1 bg-[#F5F5F7]'>Store</button>
                  <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 bg-[#F5F5F7] mr-3 ml-1'>Events</button>
                  
              </div>
          </div>
        </div>

      <div className='px-4'>
        <ProfilePost/>
        <ProfilePost/>
        <ProfilePost/>
        <ProfilePost/>
      </div>

  </div>
  )
}

export default Profile