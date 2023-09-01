import Assets from "@/assets/Assets";
import UserBox from "@/components/UserBox";

const SearchPage = () => {
  return (
    <div className="w-full overflow-hidden bg-[#FEF2F1]">
      <div className="header shadow-card flex w-full flex-col rounded-b-3xl bg-[#CDF0EA] pb-12">
        <div>
          <div className="relative ">
            <img
              src={Assets.search}
              className="absolute left-10 top-1/2 -translate-y-1/2 transform"
            />
            <input
              type="search"
              id="site-search"
              name="search"
              className="shadow-button m-7 mt-7 h-12 w-5/6 rounded-2xl bg-white pl-10"
              placeholder="Search..."
            />
          </div>
        </div>

        <h1 className="p-4 pb-6 pl-8 pt-2 text-2xl font-bold">Find</h1>

        <div className="grid grid-cols-2 gap-7 px-8 text-sm font-semibold ">
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#FFD1D1]">
            Communities
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#FFD1D1]">
            Creators
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#F5F5F7]">
            Events
          </button>
          <button className="w-25 shadow-button h-10 rounded-3xl bg-[#F5F5F7]">
            Courses
          </button>
        </div>
      </div>

      <div>
        <h1 className="pl-6 pt-8 text-2xl font-bold">Popular</h1>

        <div className="overflow-x-scroll whitespace-nowrap p-2 pb-2 pt-6">
          <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
            <button className="shadow-button ml-3 mr-1 h-8 w-52 rounded-3xl bg-[#FFD1D1] px-3 py-1">
              Creators
            </button>
            <button className="shadow-button mx-1 h-8 w-52 rounded-3xl bg-[#F5F5F7] px-3 py-1">
              Communities
            </button>
            <button className="shadow-button mx-1 h-8 w-52 rounded-3xl bg-[#F5F5F7] px-3 py-1">
              Events
            </button>
            <button className="shadow-button ml-1 mr-3 h-8 w-52 rounded-3xl bg-[#F5F5F7] px-3 py-1">
              Courses
            </button>
          </div>
        </div>
      </div>

      <UserBox />
      <UserBox />
      <UserBox />
      <UserBox />
      <UserBox />
      <UserBox />
      <UserBox />
      <UserBox />
    </div>
  );
};

export default SearchPage;
