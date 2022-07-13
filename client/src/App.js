import { Route, Switch } from 'react-router';

import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';

import './App.css';
import Navbar from './components/Navbar.jsx';
import CreateR from './components/CreateR.jsx';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>

        <Route path='/home'>
          <Navbar/>
          <Home/>
        </Route>

        <Route path='/recipe/:id'>
          <Navbar/>
          <RecipeDetails/>
        </Route>

        <Route path='/create'>
          <Navbar/>
          <CreateR/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
