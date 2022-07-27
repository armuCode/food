const express = require('express')
const router = express.Router()
const { Diet, Recipe } = require("../db");

const {   
  getApiData,
} = require('./Recipes.controllers');



const getIdInAPI = async (id) => {
  const searched = await getApiData(id);
  const finded = searched.find(r => r.id === id);
  return finded;
}

const getIdInDb = async (id) => {
  const base = await Recipe.findByPk(id, {
    include: {
        model: Diet,
        attributes: ['name'],
        through: {
            attributes: [],
        }
    }
  });

  const finded = base.dataValues;

  finded['Diets'] = finded.Diets.map(r => r.name);

  return finded;

};

const getPost = async (name, image, summary, healthyScore, Diets, dishTypes, steps) => {

  if(!name) throw new Error('Name is required')
  if(!image) throw new Error('No image was provided')
  if(!summary) throw new Error('Summary is required')
  if(healthyScore < 0 || healthyScore > 100) throw new Error('Score must be a number between 0 to 100');
  if(!Diets) throw new Error('Select at least one diet')
  if(!dishTypes) throw new Error('Select at least one dish type')
  if(!steps) throw new Error('Describe at least one step')
  else {
    const newRecipe = await Recipe.create({
      name,
      image,
      summary,
      healthyScore,
      Diets,
      dishTypes, 
      steps,
    });
    const allDietsDb = await Diet.findAll({
      where: { name: Diets },
    });
    await newRecipe.addDiet(allDietsDb); 

    return `Recipe '${name}' successfully created`
  };

}

const deleted = async(id)=>{

  await Recipe.destroy({
    where: {
      id: id
    }
  }).then(count => {
    if (!count) {
      return `Error: no ${id} found`
    }
    else return `${id} deleted correctly in controller`
  });
}

module.exports = {
  getIdInAPI,
  getIdInDb,
  getPost,
  deleted, 
};























