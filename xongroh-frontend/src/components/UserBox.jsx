import Assets from '@/assets/Assets'

const UserBox = () => {
  return (
    <div className='bg-white flex flex-row p-3 m-3 mt-4 border-2 border-black rounded-2xl justify-between items-center'>
        
        <div className='flex items-center'>

          <img className='rounded-full h-50 w-50' src={Assets.user1} alt = 'dp'/>
          
          <div className='ml-2 mr-5'>
            <h3 className='font-bold'>John Doe</h3>
            <p className='text-xs'>lorem ipsum lorem ipsum aru kiba kibi likhi asu...</p>
          </div>

        </div>

        <div>
          <button className='rounded-3xl w-20 h-7 border text-sm border-black bg-[#FFD9B7]'>Support</button>
        </div>

    </div>
  )
}

export default UserBox