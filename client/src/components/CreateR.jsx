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
  if (input.healthyScore && (input.healthyScore < 10 || input.healthyScore > 100 || input.healthyScore === 0 )) errors.healthyScore = "field in range 10-100";
  if (input.steps.length === 0) errors.steps = "steps are required";
  if (input.Diets?.length === 0)
    errors.Diets = "Select at least one";
  if (input.dishTypes?.length === 0)
    errors.dishTypes = "Select at least one";

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
    healthyScore: '0',
    Diets: [],
    dishTypes: [],
    steps: [],
  });

  const [errors, setErrors] = useState({});


  function onChange(e) {
    e.preventDefault();
    
    setErrors(validate({
      ...recipeCreated,
      [e.target.name]: e.target.value
    }))

    setRecipeCreated({
      ...recipeCreated,
      [e.target.name]: e.target.value
    })

    if (e.target.name === 'Diets'){
      setRecipeCreated({
        ...recipeCreated,
        [e.target.name]: [...new Set (recipeCreated.Diets), e.target.value]
      })
    }
    if (e.target.name === 'dishTypes'){
      setRecipeCreated({
        ...recipeCreated,
        [e.target.name]: [...new Set (recipeCreated.dishTypes), e.target.value]
      })
    }
    if (e.target.name === 'steps'){
      setRecipeCreated({
        ...recipeCreated,
        [e.target.name]: [e.target.value]
      })
    }
  }

  function onSubmit(e) {
    e.preventDefault();
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
    <div className="create">
      
      <form className='createR' onSubmit={(e) => onSubmit(e)}>
      <h2>Create your own Recipe!</h2>

        <div className='divInput'>
          <label>name</label>
          <input
            className="inputCreate"
            placeholder="Write an awesome name"
            type="text"
            name="name"
            onChange={(e) => onChange(e)}
            value={recipeCreated.name}
          />
          {errors.name && (<span className="errors">{errors.name}</span>)}
        </div>

        <div className='divInput'>
          <label>image</label>
          <input
            className="inputCreate"
            placeholder="Find an image on the web"
            type="text"
            name="image"
            onChange={(e) => onChange(e)}
            value={recipeCreated.image}
          />
          {errors.image && (<span className="errors">{errors.image}</span>)}
        </div>

        <div className='divInput'>
          <label>summary</label>
          <input
            className="inputCreate"
            placeholder="Tell us a résumé about your recipe"
            type="text"
            name="summary"
            onChange={(e) => onChange(e)}
            value={recipeCreated.summary}
          />
          {errors.summary && (<span className="errors">{errors.summary}</span>)}
        </div>

        <div className='divInput'>
          <h4>0 ←-- healthy Score --→ 100</h4>
          <h5>{recipeCreated.healthyScore}</h5>
          <input
              className="barScore"
              placeholder="from 0 to 100."
              type="range"
              min="0"
              max="100"
              step="10"
              name="healthyScore"
              onChange={(e) => onChange(e)}
              value={recipeCreated.healthyScore}
              ></input>
          {errors.healthyScore && (<span className="errors">{errors.healthyScore}</span>)}
        </div>

        <br></br>
        <br></br>
        <div className='divInput'>
          <label>steps</label>
          <input
            className="inputCreate"
            placeholder="Step by step"
            type="text"
            name="steps"
            onChange={(e) => onChange(e)}
            value={[recipeCreated.steps]}
          />
          {errors.steps && (<div className="errors">{errors.steps}</div>)}
        </div>

        <br></br>
        <div>
            {recipeCreated.dishTypes.length > 0 ? recipeCreated.dishTypes.map(dish =>(
              <span className="choose">{ `•${dish} ` }</span>
            )) : <br></br>}
          </div>
        <div className='divInput'>
          <label >dishTypes</label>
          <select
              className="selectors"
              multiple
              name="dishTypes"
              onChange={(e) => onChange(e)}
          >
            <option name="-Select one-" disabled selected> -Select one- </option>
            {dishTypes.map(dish =>(
              <option key={`di-${dish}`}value={dish}>{dish}</option>
            ))}
          </select>
          {errors.dishTypes && (<span className="errors">{errors.dishTypes}</span> ) }
        </div>

        <br></br>
          <div>
            {recipeCreated.Diets.length > 0 ? recipeCreated.Diets.map(diet =>(
              <span className="choose">{ `•${diet} ` }</span>
            )) : <br></br>}
          </div>
        <div className='divInput'>
          <label >diets</label>
          <select
              className="selectors"
              multiple
              name="Diets"
              onChange={(e) => onChange(e)}
          >
            <option name="-Select one-" disabled selected> -Select one- </option>
            {allDiets.map(diet =>(
              <option key={`die-${diet}`} value={diet}>{diet}</option>
            ))}
          </select>
          {errors.Diets && (<span className="errors">{errors.Diets}</span> ) }
        </div>

        {recipeCreated.name != '' && Object.keys(errors).length === 0 ? <button className="ok"> Create Recipe </button> : ''}

      </form>
    </div>
  )
}