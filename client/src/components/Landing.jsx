import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { getAllRecipes, getAllDiets} from '../redux/actions.js'

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getAllDiets());
  }, [])
  
  return (
    <div>
        <Link to='/home'>
          <button className='start'> PRESS START </button>
          <h2>App Food</h2>
          <h2>by: ArmuCode</h2>
        </Link>
    </div>
  )
}

export default Landing;