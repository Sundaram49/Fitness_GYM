import React from 'react'
import "./Prise.css"
import { plansData } from '../data/plansData'
import whitetick from "../assets/whiteTick.png"
import arrow from "../assets/rightArrow.png"

const Prise = () => {
  return (
    <div className='prise' id='prise' >
      <div className="blur prise-blur"></div>
      <div className="blur prise-blur2"></div>
      <div className="title">
        <span className='Stroke-text'>Ready to start</span>
        <span>your journey </span>
        <span className='Stroke-text'>now withus</span>

      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whitetick} alt="" />
                  <span key={i} >{features}</span>
                </div>
              ))}

              <div className="more">See more benifits  <img src={arrow} alt="" />  </div>
              <button id="j-btn">Join now</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prise