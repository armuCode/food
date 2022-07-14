import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSortAZ } from "../redux/actions";



export default function SortAZ() {

  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault(e)
    dispatch(getSortAZ(e.target.value))
  }

  return (
    <div>
      <select name='select' onChange={onSelectChange}>
        <option name='-Select one-' disabled selected> Sort A-Z</option>
        <option value='A to Z'>A to Z</option>
        <option value='Z to A'>Z to A</option>
      </select>
    </div>
  )
}