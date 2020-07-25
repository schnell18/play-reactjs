import React, { Component } from 'react';
import './App.css';

/*class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.state.name = "JohnDoe"
    this.state.age = 20
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h1>{this.state.age} years old</h1>
      </div>
    );
  }
}*/

class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.state.isLoggedIn = false
  }

  render() {
    return (
      <div className="App">
        <h1>You are currently logged { this.state.isLoggedIn ? 'in' : 'out' }</h1>
      </div>
    );
  }
}

export default App;
