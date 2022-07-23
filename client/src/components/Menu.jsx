import { NavLink, useParams } from "react-router-dom";

import Logo from '../assets/armuCode.png'

import './CSS/Menu.css'

export default function Menu(){
  return(
    <nav>
      <div class="navbar">
        <NavLink to='/home'>
            <img 
              src={Logo} 
              alt="armuCode" 
              className="logoArmuCode"
            />
        </NavLink>
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
        </div>
          <div class="logo">
            <h1>Navbar</h1>
          </div>
          <div class="menu-items">
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