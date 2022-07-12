import { Route, Switch } from 'react-router';

import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';

import './App.css';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>

        <Route path='/home'>
          <Home/>
        </Route>

        <Route path='/recipe/:id'>
          <RecipeDetails/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
