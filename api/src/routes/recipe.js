const express = require('express')
const router = express.Router()

const {   
  getIdInAPI,
  getIdInDb,
  getPost,
  deleted,  
} = require('../controllers/Recipe.controllers');


// http://localhost:3001/recipe

/*----- Route not used to minimize request to API --- */
router.get('/:id', async (req, res, next) => {
  
  const { id } = req.params;
  try {
    if (id.length < 35 ) {
      const idAPI = await getIdInAPI(id)
      res.send(idAPI)
    } else {
      const idDB = await getIdInDb(id)
      res.json(idDB)
    }
  } catch (error) {
    next(error)    
  }
});
/* -----------------------------------------------------------*/


router.post('/create', async (req, res, next) => {
  
  const { name,
          image, 
          summary, 
          healthyScore, 
          Diets, 
          dishTypes, 
          steps 
        } =  req.body;

  try {

    const recipeCreate =  
    await getPost(
      name,
      image, 
      summary, 
      healthyScore, 
      Diets, 
      dishTypes, 
      steps
    );

    res.status(201).json(recipeCreate)

  } catch (error) { 
    next(error)
  }
})


router.delete('/delete/:id', async (req, res, next) =>{
  let { id }= req.params

  try {
    await deleted(id)
    res.status(202).json(`${id} deleted in route correctly`)

  } catch (error) {
    next(error)
    
  }

})




module.exports = router



