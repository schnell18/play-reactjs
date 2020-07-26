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

/* class App extends Component {
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
}*/

/* class App extends Component {

  render() {
    return (
      <div className="App">
        <img
          src="https://www.fillmurray.com/200/100"
          alt="Something"
          onMouseEnter={() => console.log("Mouse Entered")}
          onMouseLeave={() => console.log("Mouse Left")}
        />
        <br />
        <br />
        <button onClick={() => console.log("I was clicked!")} >Click me</button>
      </div>
    );
  }

  // <button onClick={function() {console.log("I was clicked!")}}>Click me</button>
} */

/*class App extends Component {

  constructor() {
    super()
    this.state = {
      count: 1
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleDouble = this.handleDouble.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleClick() {
    this.setState(pre => {
      return { count: pre.count + 1}
    })
  }

  handleDouble() {
    this.setState(pre => {
      return { count: pre.count * 2}
    })
  }

  handleReset() {
    this.setState({ count: 1})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick} >PlusOne</button>
        <button onClick={this.handleDouble} >Double</button>
        <button onClick={this.handleReset} >Reset</button>
      </div>
    );
  }

  // <button onClick={function() {console.log("I was clicked!")}}>Click me</button>
}*/

class App extends Component {

  constructor() {
    super()
    this.state = {
      loading: false,
      data: {}
    }
  }

  componentDidMount() {
    this.setState({ loading: true})
    fetch("https://api.duckduckgo.com/?q=valley+forge+national+park&format=json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          data: data
        })
      })
  }

  render() {
    const text = this.state.loading ? "Loading..." : this.state.data.Abstract
    return (
      <div className="App">
        {text}
      </div>
    );
  }
}

export default App;
