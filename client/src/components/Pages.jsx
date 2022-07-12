import React from "react";

import Loader from "./Loader";

import './CSS/Pages.css';

export default function Pages({recipesPerPage, allRecipes, pages, currentPage, setCurrentPage}){
  const pageNumbers = [];

  for (let i=1; i<=Math.ceil(allRecipes/recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  let totalPages = Math.ceil(allRecipes/recipesPerPage);

  return (
    !allRecipes === [] ? <Loader /> :
    <nav>
      <span>
        <button
          onClick={()=>setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
        >←PREV</button>

        <button
          onClick={()=>setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
        >NEXT→</button>
      </span>
      
      <ul>
        {pageNumbers && pageNumbers.map(number => { return (
          <button
            className={currentPage === number ? 'active' : ''}
            onClick={()=>pages(number)}>{`${number}`}
          </button>)
        })}
      </ul>
    </nav>
  )

}