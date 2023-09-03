import Assets from '@/assets/Assets'

const PostPage = () => {
  return (
    <div className="w-full overflow-hidden bg-[#FEF2F1]">
      <div className="pl-4 font-semibold">Back</div>
      <div>
        <div className="flex flex-row justify-between">
          <div className="shadow-button ml-4 mt-3 flex h-[10%] w-[50%] items-center justify-evenly rounded-3xl bg-[#DFCCFB] text-center font-semibold">
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
          <img className="h-8 w-8" src={Assets.bookmark} alt="bookmark" />
        </div>
      </div>
    </div>
  )
}

export default PostPage
