import React from 'react'
import { GrAttachment } from "react-icons/gr";
import { FaMicrophoneAlt } from "react-icons/fa";
const SendMsg = () => {
  return (
    <div
    className='msgsend'>
        <div className='msgtop'>
            <div className='msgbox'>
            <input type="text" placeholder='Type your message'/>
            <GrAttachment />
        </div>
        <button>&gt;</button>
        </div>
        <div>
            <p className='cname'>
                Powered by <span>krunk.ai <FaMicrophoneAlt /></span>
            </p>
        </div>
    </div>
  )
}

export default SendMsg