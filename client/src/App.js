import { Route, Switch } from 'react-router';

import './App.css';

import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Navbar from './components/Navbar.jsx';
import CreateR from './components/CreateR.jsx';
import CardR from './components/CardR.jsx';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>

        <Route path='/home'>
          <Menu/>
          <Navbar/>
          <Home/>
        </Route>

        <Route path='/recipe/:id'>
          <Navbar/>
          <RecipeDetails/>
        </Route>

        <Route path='/create/:create'>
          <Navbar/>
          <CreateR/>
        </Route>

        <Route path='/about'>
          <Navbar/>
        </Route>

        <Route path='/contact'>
          <Navbar/>
        </Route>


      </Switch>
    </div>
  );
}

export default App;
