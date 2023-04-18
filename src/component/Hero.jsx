import React from 'react'
import "./Hero.css"
import Header from './Header'
import heart from "../assets/heart.png"
import calories from "../assets/calories.png";
import hero from "../assets/hero_image.png";
import heroBack from "../assets/hero_image_back.png"
import { motion } from "framer-motion"
const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth<=768 ? true : false; 

  return (

    <div className='hero' id='
    home'>
      <div className="left-h">
        <Header />
        {/* the best ad  */}
        <div className="blur hero-blur"></div>
        <div className="the-best-ad">
          <motion.div
            initial={{ left:mobile?"178px":'238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          {/* <div></div> */}
          <span>The best fitness club in the town </span>
        </div>

        <div className="hero-text">
          <div>
            <span className='Stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div><span>Ideal body</span></div>
          <div><span className='pragrap'>In here we will help you to build your ideal  body and live up your life to fullest </span></div>
        </div>
        <div className="figure">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fiteness Programs</span>
          </div>
        </div>
        <div className="hero-btn">
          <button id="btn-start">Get Started</button>
          <button id="btn-learn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <div className="join-s">
          <button id="join-btn">Join Now</button>
          <motion.div className='heart-rate'
            initial={{ right: "-1rem" }}
            whileInView={{ right: '4rem' }}
            transition={transition}
          >
            <img src={heart} alt="" />
            <span>Heart Rete </span>
            <span>116 bpm </span>
          </motion.div>
          </div>

        <div className="hero-img" >

          <motion.img initial={{ right: '11rem' }} whileInView={{ right: '22rem' }} transition={transition} src={heroBack} alt="" />

          <img src={hero} alt="" /></div>
        <div className="kcl">
          <motion.div className='kcal-graph'
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
          >
            <img src={calories} alt="" />
            <div>
              <span>Calories burned </span>
              <span>220 kcal </span>
            </div>
          </motion.div></div>
      </div>
    </div >
  )
}

export default Hero; 