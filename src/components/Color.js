import React, { Component } from 'react';

 class Color extends Component {
  render() {
    return this.props.colors.map((color) => (
      <div 
        onClick={this.props.onClick}
        key = {color.id}
        style = {{ background: `#${color.hex}`, height: '20vh', width: '20vh', margin: '2%' }}>
      </div>
    ))
  }
}

export default Color;