import Assets from "@/assets/Assets";

const ImageDiv = () => {
  const divStyle = {
    backgroundImage: `url(${Assets.dummy1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div className="overflow-hidden">
      <div
        className="mt-5 flex h-60 w-full flex-row justify-between rounded-t-3xl border-2 border-black"
        style={divStyle}
      >
        <div className="ml-2 mt-3 flex h-[15%] w-[50%] items-center justify-evenly rounded-3xl border-2 border-black bg-[#F5F0BB] py-1.5 text-center font-semibold">
          <div>
            <img
              className="h-8 w-8 rounded-full "
              src={Assets.user1}
              alt="dp"
            />
          </div>
          <div className="text-sm font-semibold">Mahendra Alpha</div>
        </div>
        <img
          className="mr-2 mt-2 max-h-[20%] py-1.5"
          src={Assets.save}
          alt="save"
        />
      </div>

      <div className="w-100 flex h-14 flex-row items-center rounded-b-3xl border-x-2 border-b-2 border-black bg-[#F5F0BB] py-3 pl-4 font-semibold">
        <div className="flex items-center">
          <div>
            <button className="h-8 w-20 rounded-3xl border-2 border-black bg-[#FDCEDF]">
              100+
            </button>
          </div>
          <div className="pl-3 pr-4 text-sm font-bold">
            <p className="line-clamp-2">
              lorem ipsum lorem ipsum aru kiba kibi lorem ipsum lorem ipsum aru
              kiba kibi likhi asu lorem ipsum lorem ipsum aru kiba kibi likhi
              asu lorem ipsum lorem ipsum aru kiba kibi likhi asu{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDiv;
