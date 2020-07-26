import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "male",
      favColor: "green",
      bio: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

/*  handleChange(event) {
    if (event.target.name == 'firstName') {
      this.setState({
        firstName: event.target.value
      })
    }
    else if (event.target.name == 'lastName') {
      this.setState({
        lastName: event.target.value
      })
    }
  } */

  handleChange(event) {
    const {name, value, type, checked} = event.target
    this.setState({
      [name]: type === "checkbox" ? checked : value
    })
  }

  handleSubmit() {
    console.log("To be implemented!")
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            type="text"
            placeholder="Type your first name"
            onChange={this.handleChange}
          />
          <br/>
          <input
            name="lastName"
            value={this.state.lastName}
            type="text"
            placeholder="Type your last name"
            onChange={this.handleChange}
          />
          <br/>
          <textarea name="bio" value={this.state.bio} onChange={this.handleChange}/>
          <br/>
          <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
            Is friendly?
          </label>
          <br/>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <label>
            Favorite Color:
            <select
              name="favColor"
              value={this.state.favColor}
              onChange={this.handleChange}
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
          <br/>
          <button>Submit</button>
        </form>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
      </div>
    );
  }

}

export default App;
