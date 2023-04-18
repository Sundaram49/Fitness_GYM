import React, { useState } from 'react'
import "./Testimonials.css"
import heroImg from "../assets/t-image1.png"
import r_arrow from "../assets/rightArrow.png"
import l_arrow from "../assets/leftArrow.png"
import {testimonialsData} from "../data/testimonialsData"
import  {motion, spring} from "framer-motion"
const Testimonials = () => {
    console.log(testimonialsData[0].name)
    const[Select, setSelected]=useState(0); 
    const lLenth =  testimonialsData.length;  
    const transition = {type:spring, duration:3}
    return (
        
        <div className="testimonials"   id='testimonials'>

            <div className="left-t">
                <div className="section-t">
                    Testimonials
                </div>
                <div className="about-q">
                    <span className='Stroke-text'>What They</span>

                </div>
                <div className="about">
                    Say About us
                </div>
                <motion.p   key={Select}
                    initial={{opacity:0, x: 100}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:-100}}
                    transition={{...transition, duration:2}}  >{testimonialsData[Select].review}  </motion.p>
                <div className="author">
                    <span>{testimonialsData[Select].name}</span> - Entrepreneur
                </div>

              
            </div>
            <div className="right-t">
                <div className="t-img">
                    <motion.img 
                    key={Select}
                    initial={{opacity:0, x: 100}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:-100}}
                    transition={{...transition, duration:2}}
                     src={testimonialsData[Select].image} alt="" />
                    <motion.div initial ={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{...transition, duration:2}} className="hero-b">

                    </motion.div>
                    <motion.div initial ={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{...transition, duration:2}}  className="hero-b-t"></motion.div>
                </div>
                <div className="arrow">

                    <img 
                    onClick={()=>{
                        Select===0?setSelected(lLenth-1):setSelected((prev)=>prev-1) 
                    
                    }}
                    src={l_arrow} alt="" width={25} className="left-a" />
                    <img 
                     onClick={()=>{
                        Select===(lLenth-1)?setSelected(0):setSelected((prev)=>prev+1) 
                    
                    }}
                    src={r_arrow} alt="" className="right-a" />
                </div>
            </div>

        </div>
    )
}

export default Testimonials