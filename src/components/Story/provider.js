import React, { Component } from "react";
import { Context } from "./context";

const Provider =  class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0}
  }

  setValue = () => {
    this.setState({value: this.state.value + 1});
  } 
  
  componentDidMount = () => {
    setInterval(() => {
      this.setValue();
    }, 2000);
  } 

  render() {
    return (
      <Context.Provider value={this.state.value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;

export {
  Provider
}


