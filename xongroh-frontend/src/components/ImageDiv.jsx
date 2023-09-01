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
        className="mt-5 flex h-60 w-full flex-row justify-between rounded-t-2xl"
        style={divStyle}
      >
        <div className="shadow-button ml-4 mt-3 flex h-[15%] w-[50%] items-center justify-evenly rounded-3xl bg-[#DFCCFB] py-1.5 text-center font-semibold">
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
          className="mr-4 mt-2 max-h-[18%] py-1.5"
          src={Assets.save}
          alt="save"
        />
      </div>

      <div className="flex h-14 w-full flex-row items-center rounded-b-2xl border-x-2 bg-[#F5F0BB] py-3 pl-4 font-semibold">
        <div className="flex items-center">
          <div>
            <button className="shadow-button h-8 w-20 rounded-3xl bg-[#DFCCFB]">
              100+
            </button>
          </div>
          <div className="pl-3 pr-4 text-sm font-bold">
            <p className="line-clamp-2">
              Create the Perfect Title for Your New Blog Post. Generate dozens
              of relevant title suggestions in just a click and get new content
              ideas for your blog.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDiv;
