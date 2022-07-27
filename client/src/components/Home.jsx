import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";

import { getAllRecipes, getAllDiets  } from "../redux/actions";

import Pages from "../components/Pages";
import CardR from "../components/CardR";
import Loader from "./Loader";
import NotFound from "./NotFound";

import './CSS/Home.css';

export default function Home() {
  
  let actionsRecipes = useSelector(state => state.actionsRecipes);
  let page = useSelector(state => state.page);
  let statusCode = useSelector(state => state.status);
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(page);
  const [recipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = actionsRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  
  useEffect(() => {
    if(actionsRecipes.length === 0) dispatch(getAllRecipes());
    setCurrentPage(page)
  },[page])
  
  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  if(actionsRecipes.length === 0) return <Loader />
  if(statusCode === 500) return <NotFound/>
  else {
    return (
      <div className="homeDiv">
          <div>
            <Pages
              recipesPerPage={recipesPerPage}
              actionsRecipes = {actionsRecipes.length}
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <ul className="cardSize">
              {currentRecipes.map(recipe => {
                return(
                    <CardR
                      key={recipe.id}
                      id={recipe.id}
                      name={recipe.name}
                      image={recipe.image}
                      summary={recipe.summary}
                      healthyScore={recipe.healthyScore}
                      Diets={recipe.Diets}
                      dishTypes={recipe.dishTypes}
                      steps={recipe.steps}
                      createdInDb={recipe.createdInDb ? recipe.createdInDb : recipe.createdInDb = false}
                    />
                )
              })}
            </ul>
          </div>
      </div>
    )
  }
}