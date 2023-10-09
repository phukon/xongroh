import DOMPurify from 'dompurify'

const PostContent = ({ postData }) => {
  const clean = DOMPurify.sanitize(postData.content, { USE_PROFILES: { html: true } })
  return (
    <div className="px-5">
      <h1 className="pt-6 text-sm font-semibold">{postData.title}</h1>
      <div
        className="pb-12 pt-4 text-sm text-muted-foreground"
        style={{
          cursor: 'pointer',
          overflow: 'hidden',
          whiteSpace: 'wrap',
          wordWrap: 'break-word',
        }}
        dangerouslySetInnerHTML={{ __html: clean }}
      ></div>
    </div>
  )
}
export default PostContent
