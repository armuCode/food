import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { controlcurrentPage } from "../redux/actions";


import Loader from "./Loader";

import './CSS/Pages.css';

export default function Pages({recipesPerPage, actionsRecipes, pages, currentPage, setCurrentPage}){


  let page = useSelector(state => state.page);
  const dispatch = useDispatch()

  const pageNumbers = [];
  
  for (let i=1; i<=Math.ceil(actionsRecipes/recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  let totalPages= Math.ceil(actionsRecipes/recipesPerPage)

  return (
    !actionsRecipes === [] ? <Loader /> :
    <nav >
      <ul className="pages">
        <button
          onClick={()=>setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
        >←PREV</button>
        { pageNumbers && pageNumbers.map(number => { 
            return (
              <button
              key={number}
              className={currentPage === number ? 'active' : ''}
              onClick={(e)=>{
                pages(number)
                dispatch(controlcurrentPage(number))
              }}>{`${number}`}
              </button>
            )
          }) }
        <button
          onClick={()=>setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
        >NEXT→</button>
      </ul>
    </nav>
  )

}