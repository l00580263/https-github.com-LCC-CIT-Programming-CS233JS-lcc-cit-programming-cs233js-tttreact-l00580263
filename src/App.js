import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state= 
    {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      winningLine: Array(),
    }
   
    this.lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
