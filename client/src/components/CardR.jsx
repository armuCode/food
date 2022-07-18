
import { NavLink } from 'react-router-dom';

import DietVector from '../assets/Diets.png'
import Rate from '../assets/HRate.png'

import './CSS/CardR.css';

export default function CardR({id, name, image, summary, healthyScore, Diets, dishTypes, steps, createdInDb}) {

  return (
    <div class="card">
      <NavLink to={`/recipe/${id}`} key={id}>
      <div class="card-details">
        <img className='imageCard' src={image} alt={name} />
        <img className='vector'  src= {DietVector} alt='Diets' />
        <img className='rate'  src= {Rate} alt='Diets' />
        <div className='info'>
          <h2 class="text-title">{name}</h2>
          <div className='summaryC'>
            <p> { `${summary.slice(0, 100)}...` }</p>
          </div>  
        </div>
          <div className='diets'>
            {Diets.map(d => {return <ul>• {d} </ul>})}
          </div>
         {/*  <div className='dishTypes'>
            {dishTypes.map(d => {return <ul>{d} </ul>})}  
          </div> */}
      <button class="card-button">More info</button>      
          <span className='hearth'>{healthyScore}</span>
      </div>
      </NavLink>
    </div>
  )
}