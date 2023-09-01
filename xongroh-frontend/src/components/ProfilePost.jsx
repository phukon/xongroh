import Assets from "@/assets/Assets";

const ProfilePost = () => {
  const divStyle = {
    backgroundImage: `url(${Assets.dummy1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div className="overflow-hidden">
      <div>
        <div
          className="mt-5 flex h-60 w-full flex-row justify-between rounded-t-2xl "
          style={divStyle}
        >
          <div className="ml-3 mt-3 flex h-[15%] w-[50%] items-center justify-evenly rounded-3xl shadow-button bg-[#DFCCFB] py-1.5 text-center font-semibold">
            <div>
              <img
                className="h-8 w-8 rounded-full "
                src={Assets.user1}
                alt="dp"
              />
            </div>
            <div className="text-sm font-semibold">Mahendra Alpha</div>
          </div>
          <button className="mr-3 mt-3 h-9 w-20 rounded-3xl shadow-button bg-[#DFCCFB] font-medium ">
            100+
          </button>
        </div>
      </div>

      <div className="w-100 flex h-36 flex-row items-center rounded-b-2xl bg-[#C8E4B2] pb-2 pl-1 font-semibold">
        <div className="items-center">
          <div className="line-clamp-2 pl-3 pr-4 text-sm font-bold ">
            lorem ipsum lorem ipsum aru kiba kibi lorem ipsum lorem ipsum aru
            kiba kibi likhi aru kiba kibi
          </div>
          <div className="pl-3 pr-4 pt-2 text-xs font-normal ">
            <p className="line-clamp-4">
              lorem ipsum lorem ipsum aru kiba kibi lorem ipsum lorem ipsum aru
              kiba kibi likhi asu lorem ipsum lorem ipsum aru kiba kibi likhi
              asu lorem ipsum lorem ipsum aru kiba kibi likhi as. ipsum aru kiba
              kibi likhi asu lorem ipsum lorem ipsum aru kiba kibi likhi asu
              lorem ipsum lorem ipsum aru kiba kibi likhi as.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
