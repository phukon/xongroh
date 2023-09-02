import HomePost from '@/components/HomePost'

const HomePage = () => {
  return (
    <div className="overflow-hidden bg-[#FAF2FF]">
      <div className="header shadow-card rounded-b-3xl bg-[#F5F0BB] px-5 pb-12">
        <p className="text-medium p-5 pb-7 text-base font-normal ">
          <span className="font-bold">Hi Mahendra</span>, have a nice day!
        </p>

        <div className="grid grid-cols-2 gap-7 px-5 text-sm font-semibold">
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#DFCCFB] ">
            Drafts
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#DFCCFB]">
            Discussions
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#FFFFFF]">
            Store
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#FFFFFF]">
            Masterclass
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#FFFFFF]">
            Events
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#FFFFFF]">
            Analytics
          </button>
        </div>
      </div>

      <div className="px-3">
        <h1 className="pl-3 pt-8 text-2xl font-bold">Creations</h1>

        <div>
          <div className="overflow-x-scroll whitespace-nowrap p-2 pb-2 pt-6">
            <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#DFCCFB] px-3 py-1">
                New
              </button>
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
                Popular
              </button>
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
                Mine
              </button>
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
                Saved
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
      </div>
    </div>
  )
}

export default HomePage
