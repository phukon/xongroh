import CreationPostCard from '@/features/posts/components/creation/CreationPostCard'

const CreationPostList = ({ creationPosts }) => {
  return (
    <div>
      {creationPosts.map((post, index) => (
        <CreationPostCard key={index} post={post} />
      ))}
    </div>
  )
}

export default CreationPostList
