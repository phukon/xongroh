import Assets from "@/assets/Assets";

const UserBox = () => {
  return (
    <div className="shadow-card m-4 mt-4 flex flex-row items-center justify-between rounded-2xl bg-white p-3">
      <div className="flex items-center">
        <img className="h-50 w-50 rounded-full" src={Assets.user1} alt="dp" />

        <div className="ml-2 mr-5">
          <h3 className="font-bold">John Doe</h3>
          <p className="line-clamp-2 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis a est dapibus posuere. Donec molestie risus ac elit imperdiet
            pretium. Phasellus volutpat nec ligula gfsjak...
          </p>
        </div>
      </div>

      <div>
        <button className="shadow-button h-7 w-20 rounded-3xl bg-[#FFD9B7] text-sm font-medium ">
          Support
        </button>
      </div>
    </div>
  );
};

export default UserBox;
