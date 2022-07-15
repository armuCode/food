import {  GET_ALL_RECIPES, 
          GET_ALL_DIETS, 
          GET_DETAILS, 
          CLEAN_UP, 
          GET_SEARCHED, 
          POST_RECIPE,
          SORT_AZ,
          SORT_SCORE,
          FILTER_BY_DIET,
          FILTER_BY_ORIGIN
} from "./actions";

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
    case CLEAN_UP:
      return{
        ...state,
        recipeDetails: payload,
      }
    case GET_SEARCHED:
      return{
        ...state,
        actionsRecipes: payload,
      }
    case POST_RECIPE:
      return{
        ...state,
      }
    case SORT_AZ:
      let sortRAZ = [...state.actionsRecipes];
      sortRAZ.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return payload === 'Z to A' ? 1 : -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return payload === 'Z to A' ? -1 : 1;
        }
        return 0;
      })
      return {
        ...state,
        actionsRecipes: sortRAZ,
      };
    case SORT_SCORE:
      let sortRScore = [...state.actionsRecipes];
      sortRScore.sort((a, b) => {
        if (a.healthyScore < b.healthyScore) {
          return payload === 'ASCENDENT' ? -1 : 1;
        }
        if (a.healthyScore > b.healthyScore) {
          return payload === 'ASCENDENT' ? 1 : -1;
        }
        return 0;
      });
    case FILTER_BY_DIET:
      let allRecipes = state.allRecipes
      let arrayFilterDiet = payload === 'All' ? allRecipes : allRecipes.filter(recipe => recipe.Diets.includes(payload))
      return {
        ...state,
        actionsRecipes: arrayFilterDiet,
      };
    case FILTER_BY_ORIGIN:
      let arrayFilterOrigin = payload === 'DB' ? state.allRecipes.filter(r => r.id.length > 30 ) : payload === 'API' ? state.allRecipes.filter(r => r.id.length < 30 ) : state.allRecipes
      return {
        ...state,
        actionsRecipes: arrayFilterOrigin,
      }
    default:
        return state;
  }
}

export default reducer 
