import Assets from "@/assets/Assets";

const PollCard = () => {
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
          <div className="mr-4 mt-4 text-sm font-semibold">Poll</div>
        </div>
        <div className="mx-5 mb-4 mt-5 text-sm font-semibold">
          <div>
            Sample question about something that i want to host the poll with.
          </div>
        </div>
        <div className="mx-5 mt-3 text-xs">
          <div>
            <div className="pb-4 pr-4">
              <button className="shadow-button rounded-3xl bg-[#FFFFFF] px-3 py-2 font-semibold">
                Option 1 with some text some text
              </button>
            </div>
            <div className="pb-4 pr-4">
              <button className="shadow-button rounded-3xl bg-[#FFFFFF] px-3 py-2 font-semibold">
                Option 2 with some text
              </button>
            </div>
            <div className="pb-4 pr-4">
              <button className="shadow-button rounded-3xl bg-[#FFFFFF] px-3 py-2 font-semibold">
                Option 3 with some text some text some text
              </button>
            </div>
            <div className="pb-4 pr-4">
              <button className="shadow-button rounded-3xl bg-[#FFFFFF] px-3 py-2 font-semibold">
                Option 4 with some text
              </button>
            </div>
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
              Response <span className="text-xs">(1.6k)</span>{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollCard;
