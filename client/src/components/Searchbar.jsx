import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedRecipes, controlcurrentPage } from "../redux/actions";

import './CSS/Searchbar.css';

export default function Searchbar() {

  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    if(!search) return alert ("Please enter a search term")
    else {
      setSearch('')
      dispatch(getSearchedRecipes(search))
      dispatch(controlcurrentPage(1))
    }
  }

  function onChange(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={(e) => onSubmit(e)}>
          <input 
            className="input" 
            placeholder="find a recipe by name..." 
            required=""
            onChange={(e) => onChange(e)}
            type="text"/>
          <span className="input-border"></span>
        </form>
      </div>
    </div>
  )
}