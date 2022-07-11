import { GET_ALL_RECIPES } from "./actions";

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
      default:
        return state;
    }
}

export default reducer 
