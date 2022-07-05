const axios = require("axios");
const { API_KEY } = process.env;
const { Diet, Recipe } = require("../db");

const getApiData = async () => {  
  try {
    const apiUrl = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=2`
    );
    const apiData = apiUrl.data.results.map((recipes) => { 
      return {   
        id: recipes.id.toString(),
        name: recipes.title.toLowerCase(), 
        image: recipes.image,
        summary: recipes.summary.replace(/<[^>]+>/g, ''),
        score: recipes.spoonacularScore,
        healthyScore: recipes.healthScore,
        type: recipes.diets,
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
  } catch (e) {
    console.log('Error_getApiData', e);
  }
};

const dbData = async () => {
  const dbDatos = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
    },
  });
  return dbDatos;
};

const allRecipes = async () => {
  const api = await getApiData();
  const db = await dbData();  
  const all = api.concat(db);
  return all;
};



module.exports = {
  getApiData,
  dbData,
  allRecipes,
};