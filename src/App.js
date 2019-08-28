import React from 'react';
import './App.css';
import Data from './json/data.json';
import Main from 'components/layout/main/Main';


function App() {
  return (
    <div className="App">
      <h1>{Data.title}</h1>
      <Main />
      
    </div>
  );
}

export default App;
