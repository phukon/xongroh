import Assets from "@/assets/Assets";

const CommunityBox = () => {
  return (
    <div className="m-4 mt-5 flex flex-row items-center justify-between rounded-2xl  bg-[#FFFBDC] shadow-card p-3">
      <div className="flex items-center">
        <div className="pr-4">
          <img src={Assets.music} alt="bell" />
        </div>
        <div>
          <h3 className="font-semibold">Music Community</h3>
        </div>
      </div>
      <div>
        <div className="mr-3 h-5 w-5 rounded-3xl bg-[#AEF95E]"></div>
      </div>
    </div>
  );
};

export default CommunityBox;
