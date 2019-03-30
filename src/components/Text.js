import React, { Component } from 'react'

 class Text extends Component {
   state = {
     title: ''
   }
   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

 onSubmit = (e) => {
    e.preventDefault();
   this.setState ({input: this.state.title});
    console.log(this.state.title);
    this.setState({ title: ''});
  };

  render() {
    return (
      <div>
      <form 
        onSubmit={this.onSubmit}>
        <input 
          type="text" 
          name="title"
          placeholder="your tex here..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input 
        type="submit"
        value ="Submit"
        className ="btn"
        />
        </form>
      </div>
    )
  }
}
export default Text