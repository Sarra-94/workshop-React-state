// imrc
import React, { Component } from "react";
import Count from "./Component/count";
import Child from "./Component/lifeCycle";
// ccc
class App extends Component {
  constructor(props) {
    console.log("App constructor ");
    super(props);
    this.state = {
      count: 0,
      name: "",
      toggle: true,
    };
  }
  componentDidMount() {
    console.log("App Mounted");
    setInterval(() => {
      this.setState({count:this.state.count+1})
    },1000 );
  }
  // Should the component Update
  // method works when a new props or setstate is called
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   if (this.state.count === nextState.count) {
  //     console.log("it is not updated");
  //     return false;
  //   }
  //   console.log("it is  updated");
  //   return true;
  // }
  componentDidUpdate(){
    console.log("App componentDidUpdate called")
  }
  increment = () => {
    // it is wrong
    // this.state.count++
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    // it is wrong
    // this.state.count++
    this.setState({ count: this.state.count - 1 });
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div>
        {this.state.toggle ? (
          <div>
            <h1>Workshop state</h1>
            {/* <h3>{this.state.count}</h3> */}
            <button onClick={this.increment}>+</button>
            <Count counter={this.state.count} name={this.state.name}>
              <p>this is children component</p>
            </Count>
            <button onClick={this.decrement}>-</button>
            <input
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
               <Child counter={this.state.count} />
          </div>
        ) : null}
        <button onClick={this.toggle}>click</button>
        <hr />
     
      </div>
    );
  }
}

export default App;
