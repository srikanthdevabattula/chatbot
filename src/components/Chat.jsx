import React from 'react'
import chatbot from '../assets/chat-bot_8649605.png'
import Messages from './Messages'
import SendMsg from './SendMsg'
import { GoDotFill } from "react-icons/go";
import { VscVerifiedFilled } from "react-icons/vsc";
const Chat = () => {
  return (
    <div>
        <div className='chatScreen'>
        <div className='roboName'>
            <div className='botright'>
            <img src={chatbot} alt="" />
            <div className='botname'>
                <h3>Timpu <span className='verify'><VscVerifiedFilled /></span></h3>
                <h4>Chat assistant</h4>
            </div>
            </div>
            <div>
                <h4 className='online'><span><GoDotFill /></span>Online</h4>
            </div>
        </div>

        <Messages/>
        <SendMsg/>
        </div>
    </div>
  )
}

export default Chat