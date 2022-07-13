import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, useParams } from "react-router-dom";
import { getDetails, getAllRecipes, cleanUp } from "../redux/actions";
import Loader from "./Loader";

export default function RecipeDetails () {
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id))
    return dispatch(cleanUp())
  },[id])

  let allRecipes = useSelector(state => state.allRecipes);
  let recipeDetails = useSelector(state => state.recipeDetails);
  useEffect(() => {
    if(allRecipes.length === 0 ) dispatch(getAllRecipes())
  }, [dispatch])
  
  const { name, image, summary, healthyScore, dishTypes, steps, Diets } = recipeDetails
  if(recipeDetails.length === 0) return <Loader />
  else {
    return (
      <div>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <p>{summary}</p>
          <p>HealthyScore: {healthyScore}</p>
          <div>
            { steps ? steps.map(s => {
              return (
                <ul>
                  <span>Step {s.number}: </span>
                  <span>{s.step}</span>
                </ul>
              )
            }) : [] }
          </div>
          <div>
            <h2>Diets</h2>
            { Diets ? Diets.map(s => {
              return (
                  <li>{s}</li>
              )
            }) : [] }
          </div>
          <div>
            <h2>Dysh Types</h2>
            { dishTypes ? dishTypes.map(s => {
              return (
                  <li>{s}</li>
              )
            }) : [] }
          </div>

      </div>
    )
  }
}
