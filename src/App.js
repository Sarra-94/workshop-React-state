// imrc
import React, { Component } from "react";
// Import Component
import Count from "./Component/count";
import Child from "./Component/lifeCycle";

// ccc
class App extends Component {
  constructor(props) {
    // Constructorr methods works first
    console.log("component Initialized App");
    super(props);
    // Initialisation des variables
    this.state = {
      count: 0,
      name: "",
      show: true,
    };
  }

  // Increment Function
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleChange = (e) => {
    console.log(e);
    this.setState({ name: e.target.value });
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  // handleEvent=(e)=>{
  //  pour eliminer le link event we use event.preventDefault()
  //   e.preventDefault()
  //   console.log("event",e)
  // }
  // Life Cycle

  // component diMount means that the component rendred and mounting in the dom tree
  componentDidMount() {
    console.log("component didMount App");
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  // Should the component Update
  // method works when a new props or setstate is called
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    if (this.state.count === nextState.count) {
      console.log("it is not updated");
      return false;
    }
    console.log("it is  updated");
    return true;
  }

  componentDidUpdate() {
    console.log("the component App updated");
  }

  render() {
    return (
      <div>
        {/* If show is true he is gonna show the component Counter else nthg gonna appear */}
        {this.state.show ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <button onClick={this.increment}>+</button>
            {/* you can send the state as a props */}
            <Count count={this.state.count} />
            {/* To show the count  */}
            {/* <p style={{ fontSize: "200%", textAlign: "center" }}>
            {this.state.count}
            </p> */}
            <button onClick={this.decrement}>-</button>
            <input value={this.state.name} onChange={this.handleChange} />
          </div>
        ) : null}
        {/* <a href="#" onClick={this.handleEvent}>click</a> */}
        <button onClick={this.toggle}>
          {this.state.show ? "hide" : "start"}
        </button>
        <hr />
        <Child />
      </div>
    );
  }
}

export default App;
