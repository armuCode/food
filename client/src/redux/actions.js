const axios = require('axios');
const { REACT_APP_HOST } = process.env;

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ALL_DIETS = 'GET_ALL_DIETS';
export const GET_DETAILS = 'GET_DETAILS';

export function getAllRecipes() {
  return async function(dispatch){
    return await axios.get(`${REACT_APP_HOST}/recipes`)
    .then(rAxios => {
      dispatch({
        type: 'GET_ALL_RECIPES',
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(`Error in getAllRecipes`, err.response.data);
      return alert(err.message);
    })
  }
}

export function getAllDiets() {
  return async function(dispatch){
    return await axios.get(`${REACT_APP_HOST}/diets`)
    .then(rAxios => {
      dispatch({
        type: 'GET_ALL_DIETS',
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(`Error in getAllDiets`, err.response.data);
      return alert(err.message);
    })
  }
}

export function getDetails(id) {
  return async function(dispatch){
    return await axios.get(`${REACT_APP_HOST}/recipe/${id}`)
    .then(rAxios => {
      console.log('Hola', rAxios.data);
      dispatch({
        type: 'GET_DETAILS',
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(`Error in getDetails`, err.response.data);
      return alert(err.message);
    })
  }
}