import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { getAllRecipes, getAllDiets} from '../redux/actions.js'

import './CSS/Landing.css'

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getAllDiets());
  }, [])
  
  return (
    <div className="bg">
      <Link to='/home'>
        <div className="landing">
            <h2 className="title1">App Food</h2>
            <br></br>
            <br></br>
            <br></br>
            <button className='start'> PRESS START </button>
            <h2>by: ArmuCode</h2>
        </div>
      </Link>
    </div>
  )
}

export default Landing;