import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "male",
      destination: "",
      dietaryRestriction: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    console.log("To be implemented")
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    if (type === 'checkbox') {
      this.setState(pre => {
        return {
          dietaryRestriction: {
            ...pre.dietaryRestriction,
            [name]: checked
          }
        }
      })
    }
    else {
      this.setState({[name]: value})
    }
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              placeholder="Please enter first name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              placeholder="Please enter last name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            /> Female
          </label>
          <br/>
          <label>
            Age:
            <input
              type="text"
              name="age"
              placeholder="Please input age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Destination:
            <select
              name="destination"
              value={this.state.destination}
              onChange={this.handleChange}
            >
              <option value="">---Choose your destionation---</option>
              <option value="bejing">Bejing</option>
              <option value="shanghai">Shanghai</option>
              <option value="shenzhen">Shenzhen</option>
              <option value="guangzhou">Guangzhou</option>
            </select>
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.dietaryRestriction.isVegan}
            /> Vegan?
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.dietaryRestriction.isKosher}
            /> Kosher?
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.dietaryRestriction.isLactoseFree}
            /> Lactose Free?
          </label>
          <br/>

          <button>Submit</button>
        </form>
        <h1>Entered information</h1>
        <p>Your are: {this.state.firstName} {this.state.lastName}</p>
        <p>Gender: {this.state.gender} </p>
        <p>Age: {this.state.age} </p>
        <p>Destination: {this.state.destination} </p>
        <p>
           DietaryRestriction:
           Vegan: {this.state.dietaryRestriction.isVegan ? 'Yes' : 'No'}&nbsp;
           Kosher: {this.state.dietaryRestriction.isKosher ? 'Yes' : 'No'}&nbsp;
           Lactose Free: {this.state.dietaryRestriction.isLactoseFree ? 'Yes' : 'No'}
        </p>
      </main>
    );
  }
}

export default Form;
