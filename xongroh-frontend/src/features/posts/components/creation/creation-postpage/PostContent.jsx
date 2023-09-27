const PostContent = ({ postData }) => {
    return (
      <div className="px-5">
        <h1 className="pt-6 text-sm font-semibold">{postData.title}</h1>
        <p className="pb-12 pt-4 text-sm text-muted-foreground">
          {postData.content}
        </p>
      </div>
    );
  };
 export default PostContent  