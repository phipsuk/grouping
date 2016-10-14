import React, { Component } from 'react';
import logo from './grouping-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
        <div className="Content">
        <h2>Welcome to grouPing</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
