import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByDiet, getAllDiets, controlcurrentPage } from "../redux/actions";


export default function FilterDiet() {

  let dispatch = useDispatch();

  let allDiets = useSelector(state => state.allDiets);

  function handleFilterByDiet(e){
    e.preventDefault()
    dispatch(filterByDiet(e.target.value))
    dispatch(controlcurrentPage(1))
  }

  useEffect(() => {
    allDiets.length === 0 ? dispatch(getAllDiets()) : '';
  }, [])

  return(
    <div>
      <select defaultValue={'All'} onChange={e => handleFilterByDiet(e)}>
        <option value="All">All Diets</option>
        {allDiets.map(diet => {
          return (
            <option key={diet} value={diet}>{diet}</option>
          )
        })}
      </select> 
    </div>
  )
}