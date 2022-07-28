const express = require('express')
const router = express.Router();

const {
  getApiData,   
  allRecipes,
  getSearchByName,
  dbCreated, 
  avoidRequest,
} = require('../controllers/Recipes.controllers');

const {
  getDiets,
  getAlldiets
} = require ('../controllers/Diets.controllers')


router.get('/pruebas', async (req, res, next) => {
  try {
    res.status(200).json(await getApiData())
  } catch (error) {
    next(error);
  }
})

// http://localhost:3001/recipes
router.get('/', async (req, res, next ) => {
  try {
    res.status(200).json(await allRecipes())
  } catch (error) {
    next(error)
  }
})

router.get('/search/:name', async (req, res, next) => {

  try {
    const { name } = req.params;
    const finded = await getSearchByName(name)
    res.json(finded)
  } catch (error) {
    next(error)    
  }
});

router.get('/db', async (req, res, next) => {
  try {
    res.status(200).json(await dbCreated())
  } catch (error) {
    next(error)
  }
})


module.exports = router

