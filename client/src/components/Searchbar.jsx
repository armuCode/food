import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedRecipes, controlcurrentPage } from "../redux/actions";

import './CSS/Searchbar.css';

export default function Searchbar() {

  
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    
  },[search])

  function onSubmit(e) {
    e.preventDefault();
    if(!search) return alert ("Please enter a search term")
    else {
      dispatch(getSearchedRecipes(search))
      setSearch(e)
      dispatch(controlcurrentPage(1))
    }
  }

  function onChange(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <div>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
        <button type='reset' value='search'  >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <input 
          className="input" 
          placeholder="find by name..." 
          required=""
          onChange={(e) => onChange(e)}
          type="text"
        />

        <button id='land' type="submit">
            <svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
        </form>
    </div>
  )
}