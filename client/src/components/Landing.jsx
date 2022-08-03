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
      <div className="cater3-movingBG">
        <div className="flyinTxtCont">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="flyIn lineOne">APP</div>
          <div className="flyIn lineTwo"> food </div>
          <div className="flyIn lineThree">by: ArmuCode</div>
          <br></br>
          <button className="flyIn lineFour">press-starts</button>
          <br></br>
          <br></br>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Landing;