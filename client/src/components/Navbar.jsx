import React from "react";
import { NavLink } from "react-router-dom";

import Searchbar from "./Searchbar";

import './CSS/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">initiation</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/about">About</NavLink>
      <Searchbar/>
    </nav>
  );
}