import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";

import { getAllRecipes, getAllDiets } from "../redux/actions";

import Pages from "../components/Pages";
import CardRecipe from "../components/CardRecipe";
import Loader from "./Loader";

export default function Home() {

  const dispatch = useDispatch();
  
  
  useEffect(() => {
    allRecipes = [] ? dispatch(getAllRecipes()) : '';
  }, [dispatch])
  
  let allDiets = useSelector(state => state.allDiets);
  let allRecipes = useSelector(state => state.allRecipes);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(1);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
        <div>
          <Pages
            recipesPerPage={recipesPerPage}
            allRecipes = {allRecipes.length}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <ul>
            {currentRecipes.map(recipe => {
              return(
                <NavLink to={`/recipe/${recipe.id}`} key={recipe.id}>
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
                </NavLink>
              )
            })}
          </ul>
        </div>
    </div>
  )
}