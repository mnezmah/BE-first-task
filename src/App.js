import React, { Component } from 'react';
import logo from './logo.svg';
import Color from './components/Color';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    colors: []
  };

async componentDidMount() {
  const data = await axios.get('http://www.colr.org/json/colors/random/2');
   this.setState({
    colors: data.data.colors });
}

changeColor = () => {
  const black = document.querySelector('.App :nth-child(2)');
  black.classList.toggle("black");
  console.log('test');
}

  render() {
    
    console.log(this.state.colors);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Color 
            onClick={this.changeColor}
            colors={this.state.colors}
          />
        </header>
      </div>
    );
  }
}


export default App;
