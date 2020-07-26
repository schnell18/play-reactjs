import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';

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

  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("To be implemented")
  }

  handleChange = event => {
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
      <FormComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default Form;
