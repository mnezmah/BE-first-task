import React, { Component } from 'react'

 class Color extends Component {
   constructor(props){
     super(props);
       this.state = {
         color: 'black'
       }
     }

  render() {
    return (
      <div>
        <h1>Hello from color.js !</h1>
       
      </div>
    )
  }
}

export default Color