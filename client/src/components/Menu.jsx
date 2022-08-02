import { NavLink, useParams } from "react-router-dom";

import Logo from '../assets/armuCode.png'

import './CSS/Menu.css'

export default function Menu(){
  return(
    <nav>
      <div className="navbar">
        <NavLink to='/home'>
            <img 
              src={Logo} 
              alt="armuCode" 
              className="logoArmuCode"
            />
        </NavLink>
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
        </div>
          <div className="logo">
          </div>
          <div className="menu-items">
            <br></br>
            <br></br>
            <br></br>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </div>
        </div>
      </div>
    </nav>
  )
}