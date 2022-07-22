
import { NavLink } from 'react-router-dom';

import DietVector from '../assets/Diets.png'
import Rate from '../assets/HRate.png'

import './CSS/CardR.css';

export default function CardR({id, name, image, summary, healthyScore, Diets, dishTypes, steps, createdInDb}) {

  return (
    <div className="card">
      <NavLink to={`/recipe/${id}`} key={id}>
      <div className="card-details">
        <img className='imageCard' src={image} alt={name} />
        <img className='vector'  src= {DietVector} alt='Diets' />
        <img className='rate'  src= {Rate} alt='Diets' />
        <div className='info'>
          <h2 className="text-title">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
          <div className='summaryC'>
            <p> { `${summary.slice(0, 90)}...` }</p>
          </div>  
        </div>
          <div className='diets'>
            {Diets.map(d => {return <ul key={d}>{` •${d} `}</ul>})}
          </div>
         {/*  <div className='dishTypes'>
            {dishTypes.map(d => {return <ul>{d} </ul>})}  
          </div> */}
      <button className="card-button">More info</button>      
          <span className='hearth'>{healthyScore}</span>
      </div>
      </NavLink>
      <div className='lineBorder'></div>
    </div>
  )
}