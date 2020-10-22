import React, { Component } from "react";
class Child extends Component {
  constructor(props) {
    console.log("component Initialized child");
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("component didMount child");
  }
  render() {
    return <h2>Life Cycle Component</h2>;
  }
}

export default Child;
