import Assets from "@/assets/Assets";
import ProfilePost from "@/components/ProfilePost";

const Profile = () => {
  return (
    <div className="overflow-hidden bg-[#FFDEB4]">
      <div className="flex flex-col">
        <img src={Assets.dummy1} className=" h-40 object-cover" />
        <div className="header flex flex-col items-center rounded-b-3xl bg-[#F0D9FF] px-3 pb-6 pt-5">
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
            <button className="mx-4 rounded-3xl border-2 border-black bg-[#F5F5F7] px-3 py-1 text-sm	 font-medium">
              Support
            </button>
            <button className="mx-4 rounded-3xl border-2 border-black bg-[#C8E4B2] px-3 py-1	 text-sm font-medium">
              Message
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 pb-2 pt-6">
        <div className="overflow-x-scroll whitespace-nowrap">
          <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
            <button className="ml-3 mr-1 h-8 w-52 rounded-3xl border-2 border-black bg-[#C8E4B2] px-3 py-1">
              Portfolio
            </button>
            <button className="mx-1 h-8 w-52 rounded-3xl border-2 border-black bg-[#F5F5F7] px-3 py-1">
              Tribe
            </button>
            <button className="mx-1 h-8 w-52 rounded-3xl border-2 border-black bg-[#F5F5F7] px-3 py-1">
              Store
            </button>
            <button className="ml-1 mr-3 h-8 w-52 rounded-3xl border-2 border-black bg-[#F5F5F7] px-3 py-1">
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
