import React from 'react'
import "./Programs.css"
import {programsData} from "../../src/data/programsData"
import RightArrow from "../assets/rightArrow.png"

const Programs = () => {
    return (

        <div className="programs" id="programs">
           
            <div className="programs-header">
                <span  className='Stroke-text'>Explore Our</span>
                <span>Programs</span>
                <span className='Stroke-text'>To shape you</span>

            </div>
            <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now </span> <span><img src={RightArrow} alt="" className='arrow'/></span> </div>
                   

                </div>
            ))}

            {/* {myArray.map(item => (
                <div>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </div>
              ))} */}
            </div>
       

       </div>


       
    )
}

export default Programs