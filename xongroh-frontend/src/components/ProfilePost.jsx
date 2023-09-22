const ProfilePost = (props) => {

  const { title, content, cover, author } = props

  const divStyle = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }

  return (
    <div className="overflow-hidden">
      <div>
        <div
          className="mt-5 flex h-60 w-full flex-row justify-between rounded-t-2xl "
          style={divStyle}
        >
          <div className="shadow-button ml-3 mt-3 flex h-[13%] w-[50%] items-center justify-evenly rounded-3xl bg-[#DFCCFB] py-1.5 text-center font-semibold">
            <div>
              <img
                className="h-8 w-8 rounded-full "
                src='null'
                alt="dp"
              />
            </div>
            <div className="text-sm font-semibold">{author}</div>
          </div>
          <button className="shadow-button mr-3 mt-3 h-8 w-20 rounded-3xl bg-[#DFCCFB] font-medium ">
            100+
          </button>
        </div>
      </div>

      <div className="w-100 flex h-36 flex-row items-center rounded-b-2xl bg-[#C8E4B2] pb-2 pl-1 font-semibold">
        <div className="items-center">
          <div className="line-clamp-2 pl-3 pr-4 text-sm font-bold ">
            {title}
          </div>
          <div className="pl-3 pr-4 pt-2 text-xs font-normal ">
            <p className="line-clamp-4">{content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePost
