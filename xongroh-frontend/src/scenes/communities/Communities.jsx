import CommunityBox from "@/components/CommunityBox";

const Communities = () => {
  return (
    <div className="bg-[#C1EFFF]">
      <div className="header flex flex-col items-center rounded-b-3xl bg-white pb-8 pt-6">
        <h1 className="text-center text-2xl font-bold">My Communities</h1>
      </div>

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
  );
};

export default Communities;
