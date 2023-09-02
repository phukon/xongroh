import CommunityBox from "@/components/CommunityBox";

const myCommunities = () => {
  return (
    <div className="bg-[#EEF1FF]">
      <div className="header shadow-card flex flex-col items-center rounded-b-3xl bg-[#B8E8FC] pb-8 pt-6">
        <h1 className="text-center text-2xl font-bold">My Communities</h1>
      </div>

      <div className="pt-2">
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
        <CommunityBox />
      </div>
    </div>
  );
};

export default myCommunities;
