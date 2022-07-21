import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, useParams } from "react-router-dom";
import { getDetails, getAllRecipes, cleanUp } from "../redux/actions";
import Loader from "./Loader";

import './CSS/RecipeDetails.css';

import Rate from '../assets/HRate.png'
import dietsVector from '../assets/Diets.png'

export default function RecipeDetails () {
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id))
    return dispatch(cleanUp())
  },[id])

  let recipeDetails = useSelector(state => state.recipeDetails);

  
  const { name, image, summary, healthyScore, dishTypes, steps, Diets } = recipeDetails



  if(recipeDetails.length === 0) return <Loader />
  else {
    return (
      <div className="detailsR">
        <div className="div2">
          <h2 className="titleD">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </div>
          <img className="imageD" src={image} alt={name} />
        

        <div className="div3">
          <img src={Rate} alt='HealthyScore' />
          <h4 className="hs">healthy Score</h4>
          <h3 className="hs">{healthyScore}</h3>
        </div>
        
        <div className="div4">
          <p className="summaryD">{summary}</p>
        </div>

        <div className="div5">
            <br></br>
            <br></br>
            <h3>Steps</h3>
            { steps ? steps.map(ste => {
              return (
                <p key={`ste-${ste}`}> Step {ste.number}: {ste.step} </p>
              )
            }) : <p>No steps</p>}
            <br></br>
            <br></br>
          </div>

          <div className="div6">
            <h2>Dysh Types</h2>
            { dishTypes ? dishTypes.map(s => {
              return (
                  <li key={`t${s}`} >{s}</li>
              )
            }) : <p>No dish types</p>}
            <br></br>
            <img className='dietsV' src={dietsVector} alt='Vector Diets' />
            <br></br>
            <h2>Diets</h2>
            { Diets ? Diets.map(s => {
              return (
                  <li key={`d${s}`}>{s}</li>
              )
            }) : <p>No diets</p>}
          </div>

      </div>
    )
  }
}
