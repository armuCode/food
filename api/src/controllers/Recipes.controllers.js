const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");

const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
const { API_KEY } = process.env;
const queryUrl = '&addRecipeInformation=true&number='
const nR = 1

const { dbRecipes } = require('../../dbRecipes')

let apiSpoon = []

const getApiData = async () => {  
  try {
    apiSpoon = await axios.get(
      `${url}${API_KEY}${queryUrl}${nR}`
      );
    
    apiSpoon = await apiSpoon.data.results.map((recipes) => {
          return {
            id: recipes.id.toString(),
            name: recipes.title.toLowerCase(), 
            image: recipes.image,
            summary: recipes.summary.replace(/<[^>]+>/g, ''),
            healthyScore: recipes.healthScore,
            Diets: recipes.vegetarian === true ? 
                  [...recipes.diets, 'vegetarian']
                  : recipes.diets,
            dishTypes: recipes.dishTypes,
            steps: recipes.analyzedInstructions[0]?.steps.map((s) => {
              return {
                number: s.number, 
                step: s.step,
              };
            }),
          }
    })
    return apiSpoon;

  } catch(error) {
    console.error(
      "\x1b[43m", '---Error during getApiData---', error.response.data
    );
    throw new Error ('Your daily points has been reached',)
  }
};

let avoidRequest = async () => {
  try {
    apiSpoon = await dbRecipes.concat(apiSpoon)
    apiSpoon = [...new Set(apiSpoon)]
    return apiSpoon;
  } catch (error) {
    console.error(
      "\x1b[43m", '---Error during getApiData---', error.response.data
    );
    throw new Error ('avoidRequest function is not possible',)
  }
}

const dbCreated = async () => {
  let dbDatos = await Recipe.findAll({
    include: {
      model: Diet,
        attributes: ["name"],     
        through: {
          attributes: [],
      }
    }
  });

  dbDatos = dbDatos.map(r => { 
    const finded = r.dataValues;
    finded['Diets'] = finded.Diets.map(r => r.name);
    return finded;
  })
    
  return dbDatos;
};

const allRecipes = async () => {
  const api = await avoidRequest();
  const db = await dbCreated();  
  const all = api.concat(db);
  return all;
};


const getSearchByName = async (name) => { 

  const allrecipesFinded = await allRecipes();
  if (name) {
    const fil = allrecipesFinded.filter((el) => 
            el.name.toLowerCase().includes(name.toLowerCase())
      /* el.healthyScore > name  */
      ); 

  if(fil.length) return fil; 
  else {
      throw new Error(`not found in this search ${name}`)  
    }
  } 
};

module.exports = {
  getApiData,
  dbCreated,
  allRecipes,
  getSearchByName,
  avoidRequest,
};