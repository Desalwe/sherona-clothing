import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const HatsPage = (props) => {
  console.log("HatsPage props", props)
  return (
    <h1>HATS PAGE</h1>
  );
};

function App(props) {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

