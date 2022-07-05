const { Diet, Recipe } = require("../db");


const getByName = async (req, res) => { 
  try {
    const { name } = req.query;
    const recipe = await allRecipes();
    if (name) {
      const fil = recipe.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      fil.length ? res.send(fil) : res.status(404).send({ msg: "not found" });
    } else {
      return res.send(recipe);
    }
  } catch (e) {
    console.log('Error_getByName',e);
  }
};

const getIdRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const filId = await allRecipes(id);
    if (id) {
      const busqueda = filId.filter((el) => el.id === id);
      busqueda.length
        ? res.send(busqueda)
        : res.send({ msg: "error does not exist" });
    } else {
      res.send({ msg: "Should enter a valid ID" });
    }
  } catch (error) { 
    res.status(404).send({ msg: "Should enter a valid ID" });
  }
};

const getPost = async (req, res) => {
  const { name, summary, score, healthyScore, steps, type, image, dishTypes } =
    req.body;
  try {
    const nuevaReceta = await Recipe.create({
      name,
      image,
      summary,
      score,
      healthyScore,
      type,
      dishTypes, 
      steps,
      
    });

    const dietas = await Diet.findAll({
      where: { name: type },
    });
    await nuevaReceta.addDiet(dietas); 

    return res.status(200).send({ msg: "successfully created" });
  } catch (e) { 
    console.log('Error_getPost',e);
  }
};


const deleted = async(req,res)=>{
  let {id}=req.params
  await Recipe.destroy({
    where: {
     id: id
    }
   }).then(count => {
    if (!count) {
     return res.status(404).send({error: 'No user'});
    }
    res.status(204).send();
   });
}


module.exports = {
  getByName,
  getIdRecipe,
  getPost,
  deleted,  
};