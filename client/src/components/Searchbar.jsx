import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, useParams } from "react-router-dom";

import { getSearchedRecipes } from "../redux/actions";

import './CSS/Searchbar.css';

export default function Searchbar() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    if(!search) return alert ("Please enter a search term")
    dispatch(getSearchedRecipes(search))
    history.push("/home");
    setSearch('')
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
            class="input" 
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