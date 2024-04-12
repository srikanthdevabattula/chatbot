import React from 'react'
import bag from '../assets/Frame 5591.png'
import { VscSettings } from "react-icons/vsc";
import { VscVerifiedFilled } from "react-icons/vsc";
const Messages = () => {
  return (
    <div className='msgScreen'>
        <div className='robo'>
            <p className='botmsg'>Hi Sam! I am your personal shopping assistant , how can i help you today ?</p>
            <p className='time'>4:45 PM</p>
        </div>
        <div className='user'>
            <p className='usermsg'>I am looking for a hand bag, with long strap .</p>
            <p className='time'>4:46 PM</p>
        </div>

        <div>
            <p className='tags'>Popular tags for handbag</p>
            <div className='tag'>
                <button>Clutch</button>
                <button>Fabric Lining</button>
                <button>Baggit</button>
                <button>Multi</button>
                
            </div>

            <div className='robo'>
                <div className='botmsg'>
                <div className='product'>
                    <img src={bag} alt="" />
                    <div>
                    <h6 className='pname'>Bags on Timpu <span className='verify'><VscVerifiedFilled /></span></h6>
                    <p className='pcount'>1123 products &gt;</p>
                    </div>
                </div>
            <p className=''>Or set filter and help us choose the best bag for you.</p>
            </div>
             <p className='time'>4:48 PM</p>
        </div>


        <div>
            <div className='filter'>
            <p className='tags'>Select filters</p>
            <p className='tags'><VscSettings />Filter</p>
            </div>
            <div className='tags'>
                <button className='selectedbtn'>Clutch X</button>
                <button className='unselected'>Fabric Lining X</button>
                <button className='unselected'>Baggit X</button>
                <button className='unselected'>Multi X</button>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Messages