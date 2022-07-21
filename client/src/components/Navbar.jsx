import React from "react";
import { NavLink, useParams } from "react-router-dom";

import Searchbar from "./Searchbar";
import SortAZ from "./SortAZ";
import SortScore from "./SortScore";
import FilterDiet from "./FilterDiet";
import FilterOrigin from "./FilterOrigin";
import FClear from "./FClear";
import Menu from "./Menu";

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
              className="logoArmuCode"
              />
        </NavLink>
      </nav>
        <Menu/>
      <menu className='navbarActions'>
            <FClear/>
            <Searchbar/>
            <FilterDiet/>
            <FilterOrigin/>

      <div>
            <SortAZ/>
            <SortScore/>
      </div>
          { create ?  '' :
          <div className="buttonsN">
            <NavLink to='create/own'>
              <button className="buttonCreate">  Create Recipe  </button>
            </NavLink> 
          </div>          
          }
      </menu>
    </>
  );
}