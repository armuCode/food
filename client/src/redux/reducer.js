
import { GET_ALL_RECIPES, GET_ALL_DIETS, GET_DETAILS } from "./actions";

const initialState = {
  allRecipes: [],
  actionsRecipes: [],
  recipeDetails:[],
  allDiets: [],
}


export function reducer (state = initialState, { type, payload /* action */}){
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: payload,
        actionsRecipes: payload,
      }
    case GET_ALL_DIETS:
      return {
        ...state,
        allDiets: payload,
      }
    case GET_DETAILS:
      return{
        ...state,
        recipeDetails: payload,
      }
    default:
        return state;
    }
}

export default reducer 
