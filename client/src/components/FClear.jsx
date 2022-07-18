import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { getAllRecipes, getAllRecipesLoaded  } from "../redux/actions";

import './CSS/FClear.css';

export default function FClear() {

  let dispatch = useDispatch();

  let allRecipes = useSelector(state => state.allRecipes);
  const history = useHistory()


  useEffect(() => {
    allRecipes.length === 0 ? dispatch(getAllRecipes()) : '';
  }, [])

  function handleClearFilters(e){
    e.preventDefault()
    dispatch(getAllRecipesLoaded(e.target.value))
    history.push('/home')
  }

  return(
    <button
    className="buttonClear"
    onClick={e => handleClearFilters(e)} 
    value='All' 
    >Clear Filters</button>
  )
}