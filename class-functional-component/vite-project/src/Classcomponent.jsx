import React, { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize component state here
      counter: 0,
    };
  }

  componentDidMount() {
    // Code to run after the component has mounted
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    // Code to run after the component has updated
    console.log("Component did update");
  }

  componentWillUnmount() {
    // Code to run before the component is unmounted
    console.log("Component will unmount");
  }

  handleClick = () => {
    // Example of updating state in response to an event
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyClassComponent;
