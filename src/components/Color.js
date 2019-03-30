import React, { Component } from 'react';


 class Color extends Component {

  render() {
       return this.props.colors.map((color) => (
        <h1
          key={color.id}
        >
          Color{color.id}: {color.hex}
        </h1>
      ))
  }
}

export default Color;