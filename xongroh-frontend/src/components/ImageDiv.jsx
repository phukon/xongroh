import Assets from '@/assets/Assets'


const ImageDiv = () => {
  const divStyle = {
    backgroundImage: `url(${Assets.dummy1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  return (
    <div className='overflow-hidden'>
    <div className='flex flex-row justify-between mt-5 h-60 w-full border-2 border-black rounded-t-3xl' style={divStyle}>
      
      <div className='bg-[#F5F0BB] mt-3 ml-2 py-1.5 font-semibold flex items-center text-center justify-evenly border-2 border-black rounded-3xl w-[50%] h-[15%]'>
        
        <div>
          <img className='rounded-full h-8 w-8 ' src={Assets.user1} alt = 'dp'/>
        </div>
        <div className='font-semibold text-sm'>Mahendra Alpha</div>
      </div>
      <img className='mr-2 mt-2 py-1.5 max-h-[20%]' src={Assets.save} alt='save'/> 
    </div>


      <div className='bg-[#F5F0BB] items-center py-3 pl-4 font-semibold flex flex-row w-100 h-14 border-x-2 border-b-2 rounded-b-3xl border-black'>
        <div className='flex items-center'>
          <div>
            <button className='border-2 border-black rounded-3xl w-20 h-8 bg-[#FDCEDF]'>100+</button>
          </div>
          <div className='text-sm pl-3 pr-4 font-bold'>
            <p className='line-clamp-2'>lorem ipsum lorem ipsum aru kiba kibi lorem ipsum lorem ipsum aru kiba kibi likhi
             asu lorem ipsum lorem ipsum aru kiba kibi likhi asu lorem ipsum lorem ipsum aru kiba kibi likhi asu </p>
          </div> 
        </div>
       
      </div>
    </div>
  )
};

export default ImageDiv;
