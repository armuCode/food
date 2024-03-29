import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAZ } from "../redux/actions";



export default function SortAZ() {

  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault(e)
    dispatch(sortAZ(e.target.value))
  }

  return (
    <div>
      <select name='select' onChange={e => onSelectChange(e)}>
        <option name='-Select one-' disabled selected> Sort Name</option>
        <option value='A to Z'>A to Z</option>
        <option value='Z to A'>Z to A</option>
      </select>
    </div>
  )
}