import React, { Component } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Number from "./components/Number";

class App extends Component {
  render() {
    return (
      <div>
        <Number />
        <Counter />
      </div>
    );
  }
}

export default App;
