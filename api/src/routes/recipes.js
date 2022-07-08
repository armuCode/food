const express = require('express')
const router = express.Router();

const {   
  allRecipes,
  getSearchByName,
  dbData
} = require('../controllers/Recipes.controllers');


router.get('/pruebas', async (req, res, next ) => {
  try {
    res.status(200).json(await dbData())
  } catch (error) {
    next(error)
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

router.get('/search', async (req, res, next) => {

  try {
    const { name } = req.query;
    const finded = await getSearchByName(name)
    res.status(200).json(finded)
  } catch (error) {
    next(error)    
  }
});


module.exports = router

