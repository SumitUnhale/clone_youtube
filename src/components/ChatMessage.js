import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center p-2 shadow-sm'>
        <img alt='User' className='h-6' src='https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0' />
        <span className='font-bold mx-2'>{name}</span>
        <span className='mx-1'>{message}</span>
    </div>
  )
}

export default ChatMessage
