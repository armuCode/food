const express = require('express')
const router = express.Router();

const {   
  allRecipes,
} = require('../controllers/Recipes.controllers');

const {   
  getByName,
  getIdRecipe,
  getPost,
  deleted,  
} = require('../controllers/Recipe.controllers');

const {   
  getDiets,
  getAlldietas, 
} = require('../controllers/Diets.controllers');


router.get('/pruebas', async (req, res, next ) => {
    res.json(await getAlldietas())
})

// http://localhost:3001/recipes

router.get('/', async (req, res, next ) => {
  try {
    res.status(200).json(await allRecipes())
  } catch (error) {
    next(error)
  }
})


module.exports = router

