import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { cleanUp } from "../redux/actions";
import { useHistory } from 'react-router';

import './CSS/NotFound.css';

export default function NotFound() {

  let [code, search]= useSelector(state => state.status); 
  const history = useHistory()
  const dispatch = useDispatch();
  

  useEffect(()=>{
      setTimeout (() => {
      dispatch(cleanUp())
      history.push('/home')
    }, '3000')
  },[dispatch])
  
  return (
      <section class="page_404">
        <br></br>
        <br></br>

        <div class="container">
          <div class="row">	
          <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
          <div class="four_zero_four_bg">
            <h1 class="text-center ">..404</h1>
            <h3 id='searchedN'>
            { search === undefined ? `come on!` : ` ¿ ${search} ?` }
            </h3>
          </div>

          <div class="spinner">
            <span>R</span>
            <span>E</span>
            <span>D</span>
            <span>I</span>
            <span>R</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>I</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        
          </div>
          </div>
          </div>
        </div>
      </section>
  )
}