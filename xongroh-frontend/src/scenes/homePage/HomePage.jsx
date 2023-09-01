import Assets from "@/assets/Assets";
import ImageDiv from "@/components/ImageDiv";

const HomePage = () => {
  return (
    <div className="bg-[#FAF2FF]">
      <div className="header shadow-card rounded-b-3xl bg-[#F5F0BB] px-5 pb-12">
        <div className="header-text flex flex-row items-center justify-between py-5">
          <h1 className="text-3xl font-bold">Xongroh</h1>
          <div className="flex flex-row space-x-5">
            <img className="h-8 w-8" src={Assets.bell} alt="notification" />
            <img className="h-8 w-8" src={Assets.chat} alt="chat" />
          </div>
        </div>

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
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#F5F5F7]">
            Store
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#F5F5F7]">
            Masterclass
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#F5F5F7]">
            Events
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#F5F5F7]">
            Analytics
          </button>
        </div>
      </div>
      <div className="px-3">
        <h1 className="pl-6 pt-8 text-2xl font-bold">Creations</h1>

        <div>
          <div className="overflow-x-scroll whitespace-nowrap p-2 pb-2 pt-6">
            <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#DFCCFB] px-3 py-1">
                New
              </button>
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#F5F5F7] px-3 py-1">
                Popular
              </button>
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#F5F5F7] px-3 py-1">
                Mine
              </button>
              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#F5F5F7] px-3 py-1">
                Saved
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <ImageDiv />
        <ImageDiv />
        <ImageDiv />
        <ImageDiv />
        <ImageDiv />
        <ImageDiv />
      </div>
    </div>
  );
};

export default HomePage;
