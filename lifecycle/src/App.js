import React, { Component } from 'react';
import './App.css';
import Button from './Button'
// import Conditional from './Conditional'

/*class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 1500)
  }

  render() {
    return (
      <div className="App">
        <Conditional isLoading={this.state.isLoading}/>
      </div>
    )

  }
}*/

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(pre => {
      return {loggedIn: !pre.loggedIn}
    })
  }

  render() {
    return (
      <div className="App">
        <Button loggedIn={this.state.loggedIn} handleClick={this.handleClick}/>
      </div>
    )

  }
}

export default App;
