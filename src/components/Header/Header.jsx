import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">

        <img src={Logo} alt="" className='logo'/>

        <u1 className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </u1>
    </div>
  )
}

export default Header