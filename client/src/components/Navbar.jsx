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
        <NavLink to='/home'>
            <img 
              src={Logo} 
              alt="armuCode" 
              className="navbar-logo" 
              width="50" height="50"
              />
        </NavLink>
      </nav>
        <label>
            <input type="checkbox"/>
            <span className="menu"> <span className="hamburger"></span> </span>
            <ul>
            <li> <a className="aHome" href="/home">Home</a> </li>
            <li> <a className="aHome" href="/about">About</a> </li>
            <li> <a className="aHome" href="/contact">Contact</a> </li>
            </ul>
        </label>
      <menu className='navbarActions'>
      <div>
            <FClear/>
            <FilterDiet/>
            <FilterOrigin/>
      </div>
      <div>
            <br></br>
            <SortAZ/>
            <SortScore/>
      </div>
      <br></br>          
          { create ?  '' :
          <div className="buttonsN">
            <NavLink to='create/own'>
              <button className="buttonCreate"> Create Recipe</button>
            </NavLink> 
          </div>          
          }
          <Searchbar/>
      </menu>
    </>
  );
}