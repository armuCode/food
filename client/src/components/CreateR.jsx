import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { postRecipe } from "../redux/actions";

import { getAllRecipes, getAllDiets } from "../redux/actions";

import './CSS/CreateR.css';

function validate(input){
  let errors = {};
  if (!input.name) errors.name = "Name is required";
  if(/^[^a-zA-Z0-9]/.test(input.name)) errors.name = "No especial caracters are allowed";  
  if (!input.image) errors.image = "Image is required";
  if (!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(input.image)) errors.image = "Url is not valid";
  if (!input.summary) errors.summary = "Summary required";
  if (input.healthyScore && (input.healthyScore < 10 || input.healthyScore > 100)) errors.healthyScore = "healthyScore must be in range 10-100";
  if (!input.steps) errors.steps = "steps are required";
  if (input.Diets?.length === 0)
    errors.Diets = "Select at least one diet";
  if (input.dishTypes?.length === 0)
    errors.genres = "Select at least one dishTypes";

  return errors;
}


export default function CreateR() {

  const dispatch = useDispatch();
  const history = useHistory();

  let actionsRecipes = useSelector(state => state.actionsRecipes);
  let allDiets = useSelector(state => state.allDiets);
  
  useEffect(() => {
    actionsRecipes.length === 0 ? dispatch(getAllRecipes()) : '';
    allDiets.length === 0 ? dispatch(getAllDiets()) : '';
  }, [dispatch])

  let dishTypes = [
    "side dish",
    "lunch",
    "main course",
    "main dish",
    "dinner",
    "morning meal",
    "brunch",
    "breakfast"
  ]

  const [recipeCreated, setRecipeCreated] = useState({
    name:'',
    image: '',
    summary: '',
    healthyScore: '',
    Diets: '',
    dishTypes: [],
    steps: [{}],
  });

  const [errors, setErrors] = useState({});


  function onChange(e) {
    e.preventDefault();
    setRecipeCreated({
      ...recipeCreated,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...recipeCreated,
      [e.target.name]: e.target.value
    }))

    if(e.target.name === 'Diets') {
      setRecipeCreated({
        ...recipeCreated,
        [e.target.name]: [...recipeCreated.Diets, e.target.value]
      })
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(recipeCreated);
    dispatch(postRecipe(recipeCreated));
    alert('Recipe created!');
    setRecipeCreated({
      name:'',
      image: '',
      summary: '',
      healthyScore: '',
      Diets: [],
      dishTypes: [],
      steps: [],
    })
  }

  console.log(recipeCreated);

  return(
    <div>
      <br></br>
      <h1>Create your own Recipe!</h1>
      <form onSubmit={(e) => onSubmit(e)}>

        <div>
          <label>name</label>
          <input
            placeholder="Write an awesome name"
            type="text"
            name="name"
            onChange={(e) => onChange(e)}
            value={recipeCreated.name}
          />
          {errors.name && (<p className="errors">{errors.name}</p>)}
        </div>

        <div>
          <label>image</label>
          <input
            placeholder="Find an image on the web"
            type="text"
            name="image"
            onChange={(e) => onChange(e)}
            value={recipeCreated.image}
          />
          {errors.image && (<p className="errors">{errors.image}</p>)}
        </div>

        <div>
          <label>summary</label>
          <input
            placeholder="Tell us a résumé about your recipe"
            type="text"
            name="summary"
            onChange={(e) => onChange(e)}
            value={recipeCreated.summary}
          />
          {errors.summary && (<p className="errors">{errors.summary}</p>)}
        </div>

        <div>
          <label >healthy Score</label>
          <input
              className="bar-rating"
              placeholder="from 0 to 100."
              type="range"
              min="0"
              max="100"
              step="10"
              name="healthyScore"
              onChange={(e) => onChange(e)}
              value={recipeCreated.healthyScore}
            ></input>
          <label >100</label>
          {errors.healthyScore && (<p className="errors">{errors.healthyScore}</p>)}
        </div>


        <div>
          <label >diets......</label>
          <select
              className="selectors"
              multiple
              name="Diets"
              onChange={(e) => onChange(e)}
          >
            <option name="-Select one-" disabled selected> -Select one- </option>
            {allDiets.map(diet =>(
              <option value={diet}>{diet}</option>
            ))}
          </select>
          {errors.Diets && (<p className="errors">{errors.Diets}</p> ) }
        </div>

        <div>
          <label >dishTypes......</label>
          <select
              className="selectors"
              multiple
              name="dishTypes"
              onChange={(e) => onChange(e)}
          >
            <option name="-Select one-" disabled selected> -Select one- </option>
            {dishTypes.map(dish =>(
              <option value={dish}>{dish}</option>
            ))}
          </select>
          {errors.dishTypes && (<p className="errors">{errors.dishTypes}</p> ) }
        </div>

        <div>
          <label>steps</label>
          <input
            placeholder="Tell us a résumé about your recipe"
            type="text"
            name="steps"
            onChange={(e) => onChange(e)}
            value={[recipeCreated.steps]}
          />
          {errors.steps && (<p className="errors">{errors.summary}</p>)}
        </div>

        <br></br>
        <br></br>
        {recipeCreated.name != '' && Object.keys(errors).length === 0 ? <button> Create Recipe </button> : ''}

      </form>
    </div>
  )
}