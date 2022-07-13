import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";

import { getAllRecipes, getAllDiets } from "../redux/actions";

import Pages from "../components/Pages";
import CardRecipe from "../components/CardRecipe";
import Loader from "./Loader";

import './CSS/Home.css';

export default function Home() {

  const dispatch = useDispatch();
  
  let actionsRecipes = useSelector(state => state.actionsRecipes);
  
  useEffect(() => {
    actionsRecipes.length === 0 ? dispatch(getAllRecipes()) : '';
  }, [dispatch])
  

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(4);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = actionsRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  if(actionsRecipes.length === 0) return <Loader />
  else {
    return (
      <div >
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
                    <CardRecipe
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