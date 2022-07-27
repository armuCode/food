import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByOrigin, controlcurrentPage  } from "../redux/actions";


export default function FilterDiet() {

  let dispatch = useDispatch();


  function handleFilterByOrigin(e){
    e.preventDefault()
    dispatch(filterByOrigin(e.target.value))
    dispatch(controlcurrentPage(1))
  }

  return(
    <div>
      <select onChange={e => handleFilterByOrigin(e)}>
        <option value='All' selected>All Origens</option>
        <option value='DB'>Created</option>
        <option value='API'>API</option>
      </select> 
    </div>
  )
}