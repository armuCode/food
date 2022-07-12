import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, useParams } from "react-router-dom";
import { getDetails, getAllRecipes } from "../redux/actions";
import Loader from "./Loader";

export default function RecipeDetails () {
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id))
  },[id])

  let allRecipes = useSelector(state => state.allRecipes);
  let recipeDetails = useSelector(state => state.recipeDetails);
  useEffect(() => {
    if(allRecipes !== []) dispatch(getAllRecipes())
  }, [dispatch])
  
  const { name, image, summary, healthyScore, dishTypes, steps, Diets } = recipeDetails
  if(recipeDetails.length === 0) return <Loader />
  else {
    return (
      <div>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <p>{summary}</p>
          <p>{healthyScore}</p>
          <div>
            { steps ? steps.map(s => {
              return (
                <>
                  <p>Step {s.number}</p>
                  <p>{s.step}</p>
                </>
              )
            }) : []}
          </div>
      </div>
    )
  }
}
