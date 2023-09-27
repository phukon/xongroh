import CommentList from '@/features/comments/components/comments/CommentList'

const comments = [
  {
    id: 1,
    name: 'Superman Bora',
    text: 'Bhalei likhiso, borhia komol borhia...enekei tumi hodai aguwai jaba..',
    likes: 10,
    replies: [
      {
        id: 2,
        name: 'Shaktiman Boruah',
        text: 'Ooo pisuaai nahiba bro',
        likes: 5,
      },
      {
        id: 3,
        name: 'Bahubali Phukan',
        text: 'Theek Kotha koiso',
        likes: 3,
      },
    ],
  },
  {
    id: 4,
    name: 'Batman Pathak',
    text: 'Oi Superman! Do you bleed?!',
    likes: 7,
  },
]

const CommentContent = () => {
  return (
    <div>
      <CommentList comments={comments} />
    </div>
  )
}

export default CommentContent


