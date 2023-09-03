import Assets from '@/assets/Assets'

const PostPage = () => {
  return (
    <div className="mb-20 w-full overflow-hidden bg-[#FAF2FF]">
      <div>
        <div className="mt-5 pl-4 font-semibold">Back</div>
        <div className="ml-4 mr-1 mt-5 flex justify-between">
          <div className=" flex items-center justify-start">
            <div>
              <div className="shadow-button flex items-center justify-evenly rounded-3xl bg-[#DFCCFB] px-3 text-center font-semibold">
                <div>
                  <img
                    className="h-8 w-8 rounded-full "
                    src={Assets.user1}
                    alt="dp"
                  />
                </div>
                <div className="text-sm font-semibold">Mahendra Alpha</div>
              </div>
            </div>

            <div>
              <img
                className="ml-3 h-9 w-9"
                src={Assets.bookmark}
                alt="bookmark"
              />
            </div>
          </div>
          <div>
            <img className="ml-4 h-9 w-9 " src={Assets.more} alt="more" />
          </div>
        </div>
        <div className="shadow-card mt-5 rounded-b-3xl bg-[#F9F6CF] px-6 py-5">
          <div className="text-base font-semibold">
            Lorem Ipsum is simply dummy
          </div>
          <div className="pt-2 text-justify text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. but also the leap into essentially unchanged. It was
            popularised in the 1960s with the release of Letraset leap into
            electronic typesetting, essent. the release of Letraset release of
            Letrasetrelease of Letraset sheets containing Lorem Ipsum desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.... sheets containing Lorem Ipsum desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum....
          </div>
        </div>

        <div className="p-6 text-justify text-sm text-[#343434]">
          <div className="font-bold">Description</div>
          <div className="pt-1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.
          </div>
        </div>

        <div>
          <div className="mx-3 overflow-x-scroll whitespace-nowrap pb-2">
            <div className="flex w-full flex-row justify-stretch text-sm font-semibold">
              <button className="shadow-button mr-2 flex w-52 items-center justify-center rounded-3xl bg-[#DFCCFB] pl-2 pr-3">
                <img className="mr-1 h-6 w-6" src={Assets.home} alt="more" />
                <p className="text-xs">3.1k</p>
              </button>

              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
                Popular
              </button>

              <button className="shadow-button mr-2 h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
                Mine
              </button>

              <button className="shadow-button h-8 w-52 rounded-3xl bg-[#FFFFFF] px-3 py-1">
                Saved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage
