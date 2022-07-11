import { Route, Switch } from 'react-router';

import Landing from './components/A0_Landing';


import './App.css';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
