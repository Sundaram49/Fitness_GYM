import React from 'react'
import "./Footer.css"
import git from "../assets/github.png"
import insta from "../assets/instagram.png"
import lkdn from "../assets/linkedin.png"
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>

    <hr />
<div className="footer">
<div className="blur footer-blur"></div>
<div className="blur footer-blur2"></div>
    <div className="social-s">
        <img src={git} alt="" />
        <img src={insta} alt="" />
        <img src={lkdn} alt="" />
    </div>
    <div className="logo">
        <img src={logo} alt="" />
    </div>
</div>
</>
  )
}

export default Footer