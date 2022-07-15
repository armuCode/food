import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { filterByOrigin  } from "../redux/actions";


export default function FClear() {

  let dispatch = useDispatch();

  let allRecipes = useSelector(state => state.allRecipes);
  const history = useHistory()


  useEffect(() => {
    allRecipes.length === 0 ? dispatch(getAllRecipes()) : '';    
  }, [])

  function handleClearFilters(e){
    e.preventDefault()
    dispatch(filterByOrigin(e.target.value))
    history.push('/home')
  }

  return(
    <button
    onClick={e => handleClearFilters(e)} 
    value='All' 
    >Clear Filters</button>
  )
}