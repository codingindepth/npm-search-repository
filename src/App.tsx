import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import { Provider } from 'react-redux';
import {store} from './state';
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Parent></Parent> */}
        <h1>Search for the NPM package</h1>
        <RepositoriesList />
      </header>
    </div>
    </Provider>
  );
}

export default App;
