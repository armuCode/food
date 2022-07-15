import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortScore } from "../redux/actions";



export default function SortScore() {

  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault(e)
    dispatch(sortScore(e.target.value))
  }

  return (
    <div>
      <select name='select' onChange={e => onSelectChange(e)}>
        <option name='-Select one-' disabled selected> ↑ ↓ Sort Score</option>
        <option value='ASCENDENT'>ASCENDENT</option>
        <option value='DESCENDENT'>DESCENDENT</option>
      </select>
    </div>
  )
}