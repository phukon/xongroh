import Assets from '@/assets/Assets'
import UserBox from '@/components/UserBox'

const SearchPage = () => {
  return (
    <div className='bg-[#F8E8EE] w-full overflow-hidden'>
        <div className='w-full header pb-10 bg-[#C8E4B2] rounded-b-3xl flex flex-col'>
        <div>
            <div className='relative '>
                <img src={Assets.search} className='absolute left-12 top-1/2 transform -translate-y-1/2' />
                <input type="search" id="site-search" name="search" className='pl-10 m-8 mt-7 h-12 w-5/6 bg-white border-2 border-black rounded-2xl' placeholder='Search...' />
            </div>
        </div>

        <h1 className='text-2xl font-bold p-4 pl-6 pt-2 pb-6'>Find</h1>
            
            <div className='grid grid-cols-2 gap-4 px-5 font-semibold text-sm '>
            <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#FDCEDF]'>Communities</button>
            <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#FDCEDF]'>Creators</button>
            <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#F5F5F7]'>Events</button>
            <button className='border-2 border-black rounded-3xl w-25 h-10 bg-[#F5F5F7]'>Courses</button>
            </div>

        </div>

        <div>
                <h1 className='text-2xl font-bold pl-6 pt-6'>Popular</h1>
                
                <div className='overflow-x-scroll whitespace-nowrap p-2 pt-6 pb-2'>
                    <div className='w-full justify-stretch flex flex-row font-semibold text-sm'>
                        <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 ml-3 mr-1 bg-[#FDCEDF]'>Creators</button>
                        <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 mx-1 bg-[#F5F5F7]'>Communities</button>
                        <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 mx-1 bg-[#F5F5F7]'>Events</button>
                        <button className='border-2 border-black rounded-3xl px-3 py-1 w-52 h-8 bg-[#F5F5F7] mr-3 ml-1'>Courses</button>
                    </div>
                </div>
        </div>

      <UserBox/>
      <UserBox/>
      <UserBox/>
      <UserBox/>
      <UserBox/>
      <UserBox/>
      <UserBox/>
      <UserBox/>
    </div>
  )
}

export default SearchPage