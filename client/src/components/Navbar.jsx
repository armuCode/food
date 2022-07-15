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
        <NavLink to="/home">
          <img className='logo' 
            src={Logo} 
            width="50" height="50" 
            alt="logo armuCode" 
          />
        </NavLink>
        <menu className="tabs">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </menu>
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
          <Searchbar/>
          { create ?  <p></p> :          
                              <NavLink to='create/own'>
                                <button> Create Recipe</button>
                              </NavLink> 
          }
          <FClear/>
      </nav>
    </>
  );
}