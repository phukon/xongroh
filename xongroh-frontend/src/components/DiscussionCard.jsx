import Assets from '@/assets/Assets'

const DiscussionCard = () => {
  return (
    <div className="overflow-hidden">
      <div className="mt-5 w-full justify-between rounded-t-2xl bg-[#CEF1FF]">
        <div className="flex flex-row justify-between">
          <div className="shadow-button ml-4 mt-3 flex h-[10%] w-[50%] items-center justify-evenly rounded-3xl bg-[#FFFFFF] text-center font-semibold">
            <div>
              <img
                className="h-8 w-8 rounded-full "
                src={Assets.user1}
                alt="dp"
              />
            </div>
            <div className="text-sm font-semibold">Mahendra Alpha</div>
          </div>
          <div className="mr-4 mt-4 text-sm font-semibold text-[#808080]">
            Discussion
          </div>
        </div>
        <div className="mx-5 mt-5 text-sm font-semibold ">
          <div>Lorem Ipsum is simply dummy text of the printing and....</div>
        </div>
        <div className="mx-5 mt-3 text-xs">
          <div className="line-clamp-8 pb-4 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of it to
            make a type type and scrambled it to make a typetype and scrambled
            it to make a type specimen book. galley of type and scrambled galley
            hhgjgj jagdag scrambled...
            <span className="font-bold">Read more</span>
          </div>
        </div>
      </div>

      <div className="flex h-14 w-full flex-row items-center justify-start rounded-b-2xl border-x-2 bg-[#B8E8FC] px-4 py-3 ">
        <div className="pr-4">
          <button className="shadow-button h-8 w-20 rounded-3xl bg-[#FFFFFF] font-semibold">
            Like
          </button>
        </div>
        <div>
          <button className="shadow-button h-8 w-36 rounded-3xl bg-[#FFFFFF] font-semibold">
            <div>
              Response <span className="text-xs">(14)</span>{' '}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiscussionCard
