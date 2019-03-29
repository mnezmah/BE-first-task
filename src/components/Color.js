import React, { Component } from 'react'

 class Color extends Component {
  //  constructor(props){
  //    super(props);
  //      this.state = {
  //        color: 'black'
  //      }
  //    }

  render() {
       return this.props.colors.map((color) =>
        <h1
          key={color.id}
        >Color{color.id}: {color.color}</h1>
       )
  }
}

export default Color