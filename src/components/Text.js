import React, { Component } from 'react'

 class Text extends Component {
   state = {
     title : ''
   }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.textChange(this.state.title);
    this.setState({ title: '' });
  };

   onChange = (e) => this.setState({ title: e.target.value });

   

  render() {
    return (
      <div>
      <form 
        onSubmit={this.onSubmit}>
        <input 
        className= "text-input"
          type="text" 
          name="title"
          placeholder="your tex here..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input 
        className="btn"
        type="submit"
        value="Submit"
        />
        </form>
      </div>
    )
  }
}
export default Text