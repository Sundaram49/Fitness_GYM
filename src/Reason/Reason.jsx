import React from 'react'
import "./Reason.css"
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import Image3 from "../assets/t-image3.jpg"
import Image4 from "../assets/image4.png"
import tick from "../assets/tick.png"
import nb from "../assets/adidas.png"
import addidas from "../assets/nb.png"
import nike from "../assets/nike.png"



const Reason = () => {
  return (
    <div className='reas-comp'>
      <div className="reason-left">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <div className="reason-right">
        <div className="reason">
          Some Reasons
        </div>
        <div className="title">
          <span className='Stroke-text'>why</span>
          <span>Choose</span>
          <span>us? </span>
        </div>
        <div className="option">
          <span>
            <img src={tick} alt="" />
            over 140+ Expert coachs 
          </span>
          <span>
          <img src={tick} alt="" />
          train smarter and faster than before
          </span>
          <span>
          <img src={tick} alt="" />
          1 free program for new member 
          </span>
          <span>
          <img src={tick} alt="" />
          reliable partners 
          </span>
          <span></span>
        </div>
        <div className="perteners">
     <div className="p-brands">
        <div>Our partners</div>
        <img src={nb} alt="" />
        <img src={addidas}alt="" />
        <img src={nike} alt="" />
      </div>
      </div>
      </div>
      
      
    </div>

  )
}

export default Reason