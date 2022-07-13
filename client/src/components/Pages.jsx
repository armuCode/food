import React from "react";

import Loader from "./Loader";

import './CSS/Pages.css';

export default function Pages({recipesPerPage, actionsRecipes, pages, currentPage, setCurrentPage}){
  const pageNumbers = [];

  for (let i=1; i<=Math.ceil(actionsRecipes/recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  let totalPages = Math.ceil(actionsRecipes/recipesPerPage);

  return (
    !actionsRecipes === [] ? <Loader /> :
    <nav>
      <ul>
        <button
          onClick={()=>setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
        >←PREV</button>
        {pageNumbers && pageNumbers.map(number => { return (
          <button
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