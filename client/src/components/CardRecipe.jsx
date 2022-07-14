import { NavLink } from 'react-router-dom';

import './CSS/CardRecipe.css';

export default function CardRecipe({id, name, image, summary, healthyScore, Diets, dishTypes, steps, createdInDb}) {

  return (
    <div className="cardRecipe">
      <p key={id}></p>
      <h1>{name}</h1>
      <NavLink to={`/recipe/${id}`} key={id}>
        <img className='imageCard' src={image} alt={name} />
        <button className='buttonCard'>View Recipe</button>
      </NavLink>
      <div>🩺 Healthy Score:
        <span> {healthyScore}</span>
      </div>
      {Diets.map(d => {return <ul>{d} </ul>})}
      <span>------------</span>
      {dishTypes.map(d => {return <ul>{d} </ul>})}

    </div>
  )
}