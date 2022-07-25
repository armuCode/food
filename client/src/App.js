import { Route, Switch } from 'react-router';

import './App.css';

import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Navbar from './components/Navbar.jsx';
import CreateR from './components/CreateR.jsx';
import Menu from './components/Menu';
import NotFound from './components/NotFound';


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
          <Menu/>
          <RecipeDetails/>
        </Route>

        <Route path='/create/:create'>
          <Menu/>
          <CreateR/>
        </Route>

        <Route path='/about'>
          <Menu/>
        </Route>

        <Route path='/contact'>
          <Menu/>
        </Route>

        <Route path='/*'>
          <NotFound/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
