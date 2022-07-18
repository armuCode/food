import React from "react";
import { NavLink, useParams } from "react-router-dom";

import Searchbar from "./Searchbar";
import SortAZ from "./SortAZ";
import SortScore from "./SortScore";
import FilterDiet from "./FilterDiet";
import FilterOrigin from "./FilterOrigin";
import FClear from "./FClear";

import Logo from '../assets/armuCode.png'

import './CSS/Navbar.css';

export default function Navbar() {
  const { create } = useParams();
  
  return (
    <>
      <nav className="navbar">
        <img 
          src={Logo} 
          alt="armuCode" 
          className="navbar-logo" 
          width="50" height="50"
          />
        <label>
        <input type="checkbox"/>
        <span class="menu"> <span class="hamburger"></span> </span>
        <ul>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#">About</a> </li>
        <li> <a href="#">Contact</a> </li>
        </ul>
        </label>
      </nav>
      <nav className='navbarActions'>
          <div>
            <FilterDiet/>
            <FilterOrigin/>
          </div>
          <div>
            <SortAZ/>
            <SortScore/>
          </div>

          
          { create ?  <p></p> :
          <div>
            <NavLink to='create/own'>
              <button className="buttonCreate"> Create Recipe</button>
            </NavLink> 
            <FClear/>
          </div>          
          }
          <Searchbar/>
      </nav>
    </>
  );
}