import Assets from "@/assets/Assets";
import ProfilePost from "@/components/ProfilePost";

const Profile = () => {
  return (
    <div className="overflow-hidden bg-[#FFF5E8]">
      <div className="flex flex-col">
        <img src={Assets.dummy1} className=" h-40 object-cover" />
        <div className="header shadow-card flex flex-col items-center rounded-b-3xl bg-[#C8E4B2] px-3 pb-6 pt-5">
          <div className="-mb-10 flex w-full flex-row justify-around">
            <div className="text-center">
              <div className="font-bold">25</div>
              <div className="text-sm	font-medium">Creations</div>
            </div>
            <img src={Assets.user2} className="relative bottom-16" />
            <div className="text-center">
              <div className="font-bold">25k</div>
              <div className="text-sm	font-medium">Supporters</div>
            </div>
          </div>

          <div className="pb-2 pt-2 text-xl font-bold">Mahindra Alpha Beta</div>
          <p className=" px-5 pb-6 text-center text-sm font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis a est dapibus posuere. Donec molestie risus ac elit imperdiet
            pretium. Phasellus volutpat nec ligula gfsjak...
          </p>

          <div className="flex w-full flex-row justify-center">
            <button className="shadow-button h-8 w-28 mx-4 rounded-3xl bg-[#FFFFFF] px-4 py-1 text-sm	 font-medium">
              Support
            </button>
            <button className="shadow-button h-8 w-28 mx-4 rounded-3xl bg-[#DFCCFB] px-4 py-1	 text-sm font-medium">
              Message
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 pb-2 pt-10">
        <div className="overflow-x-scroll whitespace-nowrap">
          <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
            <button className="shadow-button ml-3 mr-1 h-8 w-52 rounded-3xl bg-[#DFCCFB] px-3 py-1">
              Portfolio
            </button>
            <button className="shadow-button mx-1 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Tribe
            </button>
            <button className="shadow-button mx-1 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Store
            </button>
            <button className="shadow-button ml-1 mr-3 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
              Events
            </button>
          </div>
        </div>
      </div>

      <div className="px-4">
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </div>
    </div>
  );
};

export default Profile;
