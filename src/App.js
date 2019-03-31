import React, { Component } from 'react';
import logo from './logo.svg';
import Color from './components/Color';
import Text from './components/Text';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    colors: [],
    text: 'title'
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

textChange = (title) => {
  console.log(title);
  this.setState({ text: title });
}
  render() {
    console.log(this.state.colors);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">{this.state.text}</h1>
          <Color 
            onSubmit={this.changeColor}
            colors={this.state.colors}
          />
          <Text textChange={this.textChange}/>
          
        </header>
      </div>
    );
  }
}


export default App;
