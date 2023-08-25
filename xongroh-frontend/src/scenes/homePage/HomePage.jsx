import Assets from '@/assets/Assets'
import ImageDiv from '@/components/ImageDiv'

const HomePage = () => {
  return (
    <div className='bg-[#F8E8EE]'>
      <div className='header px-5 pb-10 bg-[#F5F0BB] rounded-b-3xl'>
       
        <div className='header-text flex flex-row justify-between py-5 items-center'>
          <h1 className='text-3xl font-bold'>Xongroh</h1>
          <div className='flex flex-row space-x-5'>
            <img className='w-8 h-8' src={Assets.bell} alt = 'notification'/> 
            <img className='w-8 h-8' src={Assets.chat} alt = 'chat'/>
          </div>
        </div>

        <p className='text-medium font-base p-5 '>Hi <span className='font-bold'>Mahendra</span>, have a nice day rgebb trbtr la!</p>

        <div className='grid grid-cols-2 gap-4 px-5 font-semibold text-sm'>
          <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#FDCEDF]'>Drafts</button>
          <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#FDCEDF]'>Discussions</button>
          <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#F5F5F7]'>Store</button>
          <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#F5F5F7]'>Masterclass</button>
          <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#F5F5F7]'>Events</button>
          <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#F5F5F7]'>Analytics</button>
        </div>

      </div>
      <div className='px-3'>
        <h1 className='text-2xl font-bold pt-6 pl-6 pb-5'>Creations</h1>

    <div>
      <div className='overflow-x-scroll whitespace-nowrap p-2 pt-6 pb-2'>
        <div className='w-full justify-stretch flex flex-row font-semibold text-sm'>
          <button className='border-2 border-black rounded-3xl w-52 h-8 px-3 py-1 mr-2 bg-[#FDCEDF]'>New</button>
          <button className='border-2 border-black rounded-3xl w-52 h-8 px-3 py-1 mr-2 bg-[#F5F5F7]'>Popular</button>
          <button className='border-2 border-black rounded-3xl w-52 h-8 px-3 py-1 mr-2 bg-[#F5F5F7]'>Mine</button>
          <button className='border-2 border-black rounded-3xl w-52 h-8 px-3 py-1 bg-[#F5F5F7]'>Saved</button>
        </div>
      </div>
      
    </div>

        <ImageDiv/>
        <ImageDiv/>
        <ImageDiv/>
        <ImageDiv/>
        <ImageDiv/>
        <ImageDiv/>
      </div>
    </div>
  )
}

export default HomePage