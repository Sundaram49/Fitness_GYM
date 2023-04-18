import React, { useRef } from 'react'
import "./Join.css"
import emailjs from 'emailjs-com';

const Join = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_hfklk5x', 'template_28nrt1v', form.current, 'aGZSqeFfU7WsRhOg6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  

  return (
    <>
      <div className="message">
        <div className="left">
        <hr className='hr' />
        <div className='join'>
          <span className='Stroke-text'>Ready to </span>
          <span>level up </span>
          <span>your body </span>
          <span className='Stroke-text'>with us? </span>
        </div>
        </div>
        <div className="right">
        <div className="email">
          <form ref={form} action="" className='email-container' onClick={sendEmail}>
          <input type="email" name="user_email" placeholder='Enter your email address here' />
          <button>Join Now</button></form>

        </div>
        </div>
      </div>
</>

  )} 

export default Join 