import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByOrigin  } from "../redux/actions";


export default function FilterDiet() {

  let dispatch = useDispatch();


  function handleFilterByOrigin(e){
    e.preventDefault()
    dispatch(filterByOrigin(e.target.value))
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