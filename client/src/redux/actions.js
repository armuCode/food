const axios = require('axios');
const { REACT_APP_HOST } = process.env;

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const RECIPES_LOADED = 'RECIPES_LOADED';
export const GET_ALL_DIETS = 'GET_ALL_DIETS';
export const GET_DETAILS = 'GET_DETAILS';
export const CLEAN_UP = 'CLEAN_UP';
export const GET_SEARCHED = 'GET_SEARCHED';
export const SEARCH_ACTIVE = 'SEARCH_ACTIVE';
export const POST_RECIPE = 'POST_RECIPE';
export const SORT_AZ = 'SORT_AZ';
export const SORT_SCORE = 'SORT_SCORE';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const STATUS = 'STATUS';
export const CURRENT_PAGE = 'CURRENT_PAGE';

export function getAllRecipes() {
  return async function(dispatch){
    return await axios.get(`/recipes`)
    .then(rAxios => {
      dispatch({
        type: GET_ALL_RECIPES,
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(`Error in getAllRecipes`, err.response.data);
      return alert(err);
    })
  }
}

export function getAllRecipesLoaded() {
  return {
    type: RECIPES_LOADED,
  }
}

export function getAllDiets() {
  return async function(dispatch){
    return await axios.get(`/diets`)
    .then(rAxios => {
      dispatch({
        type: GET_ALL_DIETS,
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(`Error in getAllDiets`, err.response.data);
      return alert(err);
    })
  }
}

export function getDetails(id) {
  return {
    type: GET_DETAILS,
    payload: id
  }
}

/*----- Action not used to minimize request to API --- */

/* export function getDetails(id) {
  return async function(dispatch){
    return await axios.get(`/recipe/${id}`)
    .then(rAxios => {
      dispatch({
        type: GET_DETAILS,
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(`Error in getDetails`, err.response.data);
      return alert(err);
    })
  }
} */

export function cleanUp() {
  return {
    type: CLEAN_UP,
    payload: []
  }
}

export function getSearchedRecipes (search) {
  return async function(dispatch){
    return await axios.get(`/recipes/search/${search}`)
    .then(rAxios => {
      dispatch({
        type: GET_SEARCHED,
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(`Error in getSearchedRecipes`, err.response.status);
      dispatch({
        type: STATUS,
        payload: [err.response.status, search]
      })
    })
  }
}

export function postRecipe (payload) {
  return async function(dispatch){
    return await axios.post(`/recipe/create`, payload)
    .then(rAxios => {
      dispatch({
        type: POST_RECIPE,
        payload
      });
    })
    .catch (error => {
      return alert(error)
    })
  };
}

export function sortAZ (sort) {
  return {
    type: SORT_AZ,
    payload: sort
  }
}

export function sortScore (sort) {
  return {
    type: SORT_SCORE,
    payload: sort
  }
}

export function filterByDiet(payload){
  return {
    type: FILTER_BY_DIET,
    payload
  }
}

export function filterByOrigin(payload){
  return {
    type: FILTER_BY_ORIGIN,
    payload
  }
}

export function controlcurrentPage(number) {
  return {
    type: CURRENT_PAGE,
    payload: number
  }
}