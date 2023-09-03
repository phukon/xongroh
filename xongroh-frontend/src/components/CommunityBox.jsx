import Assets from '@/assets/Assets'

const CommunityBox = () => {
  return (
    <div className="shadow-card  m-4 flex flex-row items-center justify-between  rounded-2xl bg-[#FFFBDC] p-3">
      <div className="flex items-center">
        <div className="pr-3">
          <img src={Assets.music} alt="bell" />
        </div>
        <div>
          <h3 className="text-sm font-semibold ">Assam Music Community</h3>
          <p className="text-xs font-normal ">Members: 1.3k</p>
        </div>
      </div>
      <div>
        <div className="mr-3 h-5 w-5 rounded-3xl bg-[#AEF95E]"></div>
      </div>
    </div>
  )
}

export default CommunityBox
