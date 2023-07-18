import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm rounded-md p-2 '>
         <img className="h-6 "
              alt="user icon"
              src="https://cdn-icons-png.flaticon.com/512/552/552721.png"/> 
              <span className='px-2 font-semibold'>{name}</span>
              <span>{message}</span>
    </div>
  )
}

export default ChatMessages