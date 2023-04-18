import React, { useState } from 'react'
import "./Header.css"
import logo from "../assets/logo.png"
import bars from "../assets/bars.png"
import { Link } from 'react-router-dom';

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false; 
  const [openMenu , setOpenMenu] = useState(false)
  return (
    <div className="header"><img src={logo} className='logo' />
    {(openMenu === false && mobile === true )?
    (<div
      style={{backgroundColor:"var(--appColor)", padding:"5px" }}
    onClick={()=>setOpenMenu(true)}
    ><img src={bars} alt="" className='bars' style={{width:'3rem',  height:"2rem" }} /></div>):(
    <ul className='header-menu'>
      <li onClick={()=>setOpenMenu(false)} ><Link to ="home" span={true} smooth={true}>Home</Link></li>
      
      <li onClick={()=>setOpenMenu(false)} ><Link to ="" span={true} smooth={true}>Programmers</Link></li>
      <li onClick={()=>setOpenMenu(false)} ><Link to ="" span={true} smooth={true}>Why us</Link></li>
      <li onClick={()=>setOpenMenu(false)} ><Link to ="prise" span={true} smooth={true}>Plans</Link></li>
      <li onClick={()=>setOpenMenu(false)} > <Link to ="/testimonials" span={true} smooth={true}>Testimonials</Link> </li>
    </ul>
    )}
    

    </div>

  )
}

export default Header