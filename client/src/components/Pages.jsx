import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { current } from "../redux/actions";


import Loader from "./Loader";

import './CSS/Pages.css';

export default function Pages({recipesPerPage, actionsRecipes, pages, currentPage, setCurrentPage}){

  let actionsRecipesState = useSelector(state => state.actionsRecipes);

  const pageNumbers = [];
  
  for (let i=1; i<=Math.ceil(actionsRecipes/recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  
  let totalPages = Math.ceil(actionsRecipes/recipesPerPage);
  
  useEffect(() => {
    totalPages >= currentPage ? setCurrentPage(currentPage) : setCurrentPage(1);
  },[actionsRecipesState])
  

  return (
    !actionsRecipes === [] ? <Loader /> :
    <nav >
      <ul className="pages">
        <button
          onClick={()=>setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
        >←PREV</button>
        {pageNumbers && pageNumbers.map(number => { return (
          <button
          key={number}
          className={currentPage === number ? 'active' : ''}
          onClick={()=>pages(number)}>{`${number}`}
          </button>)
        })}
        <button
          onClick={()=>setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
        >NEXT→</button>
      </ul>
    </nav>
  )

}