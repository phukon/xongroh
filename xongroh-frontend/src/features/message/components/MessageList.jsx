import MessageCard from '@/features/message/components/MessageCard'
import Assets from '@/assets/Assets'

// Dummy data
const messageLists = [
  
    { name: 'Zubeen Garg',  dp: Assets.art, lastmsg: 'jibon kosu pator pani buli koi, bujili', unread:'2', time: '6 mins' },
    {
      name: 'Bisrut Saikia',
     
      dp: Assets.cinematography,
      lastmsg: 'nutun podcast tu kenekua pala?',
      unread:'3',
      time: '2 hrs',
      id:"1234"
    },
    {
        name: 'Riki Phukan',
        
        dp: Assets.cinematography,
        lastmsg: 'aji lua shot tu mojja asile, kaile cam tu loi anibo..!',
      unread:'1',
        time: '8 hrs',
        id:"1235"
      },
      {
        name: 'Komol Deka',
        
        dp: Assets.cinematography,
        lastmsg: 'theek ase...',
      unread:'1',
        time: '11 months',
        id:"1239"
      },
      
]

const MessageList = () => {
  return (
    <div>
      <MessageCard messageLists={messageLists} />
    </div>
  )
}

export default MessageList
