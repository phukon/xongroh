import CommunityBox from "@/components/CommunityBox";
import Assets from "@/assets/Assets";

const CommunityPage = () => {
  return (
    <div className="w-full h-full overflow-hidden bg-[#EEF1FF]">
      <div className="header shadow-card flex w-full flex-col rounded-b-3xl bg-[#FFFBDC] pb-6">
        <div className="m-4 mt-6 flex flex-row items-center justify-between  rounded-2xl bg-[#FFFBDC]">
          <div className="flex items-center">
            <div className="pr-3">
              <img src={Assets.music} alt="bell" />
            </div>
            <div>
              <h3 className="text-sm font-semibold ">Music Community</h3>
              <p className="text-xs font-normal ">Members: 1.3k</p>
            </div>
          </div>

          <div>
            <button className="shadow-button h-7 w-20 rounded-3xl bg-[#B8E8FC] text-sm font-medium ">
              Joined
            </button>
          </div>
        </div>

        <div className="m-4 text-xs">
          <div>
            One good thing about music, when it hits you, you feel no pain.
          </div>
          <div className="pt-2 font-semibold">Bob Marley</div>
        </div>
      </div>

      <div>
        <div className="overflow-x-scroll whitespace-nowrap p-2 pb-2 pt-6">
          <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
            <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#B8E8FC] px-3 py-1">
              New
            </button>
            <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Popular
            </button>
            <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Discussion
            </button>
            <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Poll
            </button>
            <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Help
            </button>
          </div>
        </div>
      </div>

      <div className="pt-2">
        
      </div>
    </div>
  );
};

export default CommunityPage;
