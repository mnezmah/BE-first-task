import React, { Component } from 'react';
import logo from './logo.svg';
import Color from './components/Color';
import './App.css';
import axios from 'axios';

class App extends Component {
state = {
  colors:  [
    {
      color: 'first color',
      id: 1
  }, 
  {
    color: 'second color',
    id: 2
  }

  ]
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Color colors= {this.state.colors}/>
        </header>
      </div>
    );
  }
}
export default App;
