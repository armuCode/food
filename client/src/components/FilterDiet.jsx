import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByDiet, getAllDiets } from "../redux/actions";


export default function FilterDiet() {

  let dispatch = useDispatch();

  let allDiets = useSelector(state => state.allDiets);

  function handleFilterByDiet(e){
    e.preventDefault()
    dispatch(filterByDiet(e.target.value))
  }

  useEffect(() => {
    allDiets.length === 0 ? dispatch(getAllDiets()) : '';
  }, [])

  return(
    <div>
      <select onChange={e => handleFilterByDiet(e)}>
        <option name='-Select one-' disabled selected>Filter by Diets</option>
        <option value="All">All Diets</option>
        {allDiets.map(diet => {
          return (
            <option value={diet}>{diet}</option>
          )
        })}
      </select> 
    </div>
  )
}