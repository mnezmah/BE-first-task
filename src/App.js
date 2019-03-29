import React, { Component } from 'react';
import logo from './logo.svg';
import Color from './components/Color';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    colors:  {}
  };

componentDidMount() {
  axios.get('http://www.colr.org/json/colors/random/2')
  .then(res => this.setState({
    colors: res.data }));
}



  render() {

    console.log(this.state.colors.colors);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Color 
            colors={this.state.colors.colors}
          />
        </header>
      </div>
    );
  }
}
export default App;
