import {  GET_ALL_RECIPES,
          RECIPES_LOADED,
          GET_ALL_DIETS, 
          GET_DETAILS, 
          CLEAN_UP, 
          GET_SEARCHED, 
          SEARCH_ACTIVE,
          POST_RECIPE,
          SORT_AZ,
          SORT_SCORE,
          FILTER_BY_DIET,
          FILTER_BY_ORIGIN,
          STATUS,
          CURRENT_PAGE,
} from "./actions";

const initialState = {
  allRecipes: [],
  actionsRecipes: [],
  filter: [],
  recipeDetails:[],
  allDiets: [],
  status: [],
  page: 1,
}


export function reducer (state = initialState, { type, payload /* action */}){
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: payload,
        actionsRecipes: payload,
        filter: state.actionsRecipes
      }
    case RECIPES_LOADED:
      return {
        ...state,
        actionsRecipes: state.allRecipes,
      }
    case GET_ALL_DIETS:
      return {
        ...state,
        allDiets: payload,
      }
    case GET_DETAILS:
      const found = state.allRecipes.find(recipe => recipe.id === payload);
      return{
        ...state,
        recipeDetails: found,
      }
    case CLEAN_UP:
      return{
        ...state,
        recipeDetails: payload,
        status: payload
      }
    case GET_SEARCHED:
      return{
        ...state,
        actionsRecipes: payload,
        filter: payload,
      }
    case SEARCH_ACTIVE:
      return{
        ...state,
        filter: payload,
      }
    case POST_RECIPE:
      return{
        ...state,
        actionsRecipes: [...new Set(state.actionsRecipes),payload]
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
      return {
        ...state,
        actionsRecipes:sortRScore
      }
    case FILTER_BY_DIET:
      let filterRecipes = state.filter
      let arrayFilterDiet = payload === 'All' ? filterRecipes : filterRecipes.filter(recipe => recipe.Diets.includes(payload))
      return {
        ...state,
        actionsRecipes: arrayFilterDiet,
      };
    case FILTER_BY_ORIGIN:
      let filterRecipesOrigin = state.filter
      let arrayFilterOrigin = payload === 'All' ? filterRecipesOrigin : payload === 'DB' ? filterRecipesOrigin.filter(r => r.id.length > 30 ) : filterRecipesOrigin.filter(r => r.id.length < 30 )
      return {
        ...state,
        actionsRecipes: arrayFilterOrigin,

      }
    case CURRENT_PAGE:
      return {
        ...state,
        page: payload
      }
    case STATUS:
      return {
        ...state,
        status: payload
      }
    default:
        return state;
  }
}

export default reducer 
