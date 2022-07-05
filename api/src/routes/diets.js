const express = require('express')
const router = express.Router()

const {   
  getAlldiets, 
  } = require('../controllers/Diets.controllers');

// http://localhost:3001/diets

router.get('/', async (req, res, next ) => {
    try {
      res.status(200).json(await getAlldiets())
    } catch (error) {
      next(error)
    }
  })

module.exports = router