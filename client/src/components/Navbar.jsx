import React from "react";
import { NavLink } from "react-router-dom";

import Searchbar from "./Searchbar";

import Logo from '../assets/armuCode.png'

import './CSS/Navbar.css';

export default function Navbar() {
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
          <Searchbar/>
          <NavLink to='/create'>
            <button> Create a videogame</button>
          </NavLink>
      </nav>
    </>
  );
}