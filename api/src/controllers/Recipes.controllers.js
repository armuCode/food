const axios = require("axios");
const db = require("../db");
const { API_KEY1 } = process.env;
const { Diet, Recipe } = require("../db");

const getApiData = async () => {  
  try {
    const apiUrl = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&addRecipeInformation=true&number=3`
    );
    const apiData = apiUrl.data.results.map((recipes) => {
       
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
      };
    });
    //console.log(apiData);
    return apiData;
  } catch(error) {
    console.error(
      "\x1b[43m", '---Error during getApiData---', error.response.data
    );
    throw new Error ('BackEnd-Recipes', 'No se cargaron las recetas')
  }
};

const dbData = async () => {
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
  const api = await getApiData();
  const db = await dbData();  
  const all = api.concat(db);
  return all;
};


const getSearchByName = async (name) => { 

  const allrecipesFinded = await allRecipes();
  if (name) {
    const fil = allrecipesFinded.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
      ); 

  if(fil.length) return fil; 
  else {
      throw new Error(`not found in this search ${name}`)  
    }
  } 
};

module.exports = {
  getApiData,
  dbData,
  allRecipes,
  getSearchByName
};