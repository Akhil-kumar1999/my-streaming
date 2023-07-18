import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateRandomName } from '../utils/helper'

const LivesChat = () => {

    const [liveMessage,setLiveMessage] = useState('')

    const dispatch = useDispatch()

    const ChatMessage =  useSelector((store)=>store.chat.messages)

    useEffect(()=>{
        // api polling
       const time =   setInterval(()=>{
        dispatch(addMessages({
            name:generateRandomName(),
            message:'Thi is the Live chat section 🐱‍🏍'
        }))
        },2000)
        return ()=> clearInterval(time)
        
    },[])

  return (
    <>
    <div className=' p-2 ml-3 w-96 h-[420px] border border-black bg-slate-50 rounded-sm
    overflow-y-scroll flex flex-col-reverse'>

    <div>
    {
    ChatMessage.map((c,i)=>{
      return  <ChatMessages key={i} name={c.name} message={c.message} />
    })
    }
    </div>
     </div>
     <form className='ml-3 border border-black' onSubmit={(e)=>{
        e.preventDefault()
        
        dispatch(addMessages({
            name:'kensu',
            message:liveMessage
        }))
     }
        
     }>
        <input type='text' className='ml-2 px-2 w-72' value={liveMessage} 
        onChange={(e)=> setLiveMessage(e.target.value)} />
        <button className='bg-green-300 ml-2 px-2 items-center rounded-lg'
        >send</button>
     </form>
     </>
  )
}

export default LivesChat