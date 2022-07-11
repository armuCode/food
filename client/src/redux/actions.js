const axios = require('axios');
const { REACT_APP_ADDRES } = process.env;

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';

export function getAllRecipes() {
  return async function(dispatch){
    return await axios.get(`${REACT_APP_ADDRES}/recipes`)
    .then(rAxios => {
      dispatch({
        type: 'GET_ALL_RECIPES',
        payload: rAxios.data
      });
    })
    .catch(err => {
      console.error(err);
      return alert(err.message);
    })
  }
}