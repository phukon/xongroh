import Assets from '@/assets/Assets'

const CommunityBox = () => {
  return (
    <div className='bg-white flex flex-row p-3 m-3 mt-4 border-2 border-black rounded-2xl justify-between items-center'>
        <div className='flex items-center'>
           <div className='pr-4'>
           <img src={Assets.music} alt = 'bell'/>
            </div> 
            <div>
            <h3 className='font-semibold'>Music Community</h3>
            </div>
        </div>
        <div>
          <div className='rounded-3xl w-5 h-5 mr-3 bg-[#AEF95E]'></div>
        </div>
        
    </div>
  )
}

export default CommunityBox