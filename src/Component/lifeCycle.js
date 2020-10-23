import React, { Component } from "react";
class Child extends Component {
  constructor(props) {
    console.log("Child constructor ");
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("Child Mounted");
  }
    componentDidUpdate(){
    console.log("children componentDidUpdate called")
  }
  componentWillUnmount(){
      console.log("component unmounted")
  }
  render() {
    return <h2>Life Cycle Component {this.props.counter}</h2>;
  }
}

export default Child;
