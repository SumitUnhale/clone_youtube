import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { randomNameGenerate, makeRandomString } from '../utils/helper';

const LiveChat = () => {

    const[liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: randomNameGenerate(),
                message: makeRandomString(15),
            }))       
        }, 2000)
        return () => clearInterval(i);
    }, [])
  return (
    <>
    <div className="w-full h-[447px] ml-1 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
            {chatMessages.map((message, i) => (
                <ChatMessage key={i} name={message.name} message={message.message} />
            ))}
        </div>
    </div>
    <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: "Sumit Unhale",
            message: liveMessage
        }));
        setLiveMessage("");
    }} className='w-full p-2 ml-1 rounded border border-black'>
        <input className='w-96 border border-black p-1' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
        <button className='border border-black p-1 px-2 rounded ml-2 bg-green-200'>send</button>
    </form>
    </>
  )
}

export default LiveChat
