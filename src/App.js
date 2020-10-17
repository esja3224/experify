import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ExperimentList from './components/ExperimentList';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/create' component={Header}/>
        <Route path='/' component={ExperimentList}/>
      </Switch>
    </div>
  );
}

export default App;
