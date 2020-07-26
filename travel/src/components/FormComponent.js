import React from 'react';

function FormComponent(props) {
    return (
      <main>
        <form onSubmit={props.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              placeholder="Please enter first name"
              value={props.data.firstName}
              onChange={props.handleChange}
            />
          </label>
          <br/>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              placeholder="Please enter last name"
              value={props.data.lastName}
              onChange={props.handleChange}
            />
          </label>
          <br/>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.data.gender === 'male'}
              onChange={props.handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={props.data.gender === 'female'}
              onChange={props.handleChange}
            /> Female
          </label>
          <br/>
          <label>
            Age:
            <input
              type="text"
              name="age"
              placeholder="Please input age"
              value={props.data.age}
              onChange={props.handleChange}
            />
          </label>
          <br/>
          <label>
            Destination:
            <select
              name="destination"
              value={props.data.destination}
              onChange={props.handleChange}
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
              onChange={props.handleChange}
              checked={props.data.dietaryRestriction.isVegan}
            /> Vegan?
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={props.handleChange}
              checked={props.data.dietaryRestriction.isKosher}
            /> Kosher?
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={props.handleChange}
              checked={props.data.dietaryRestriction.isLactoseFree}
            /> Lactose Free?
          </label>
          <br/>

          <button>Submit</button>
        </form>
        <h1>Entered information</h1>
        <p>Your are: {props.data.gender === 'male' ? 'Mr.' : "Ms."} {props.data.firstName} {props.data.lastName}</p>
        <p>Age: {props.data.age} </p>
        <p>Destination: {props.data.destination} </p>
        <p>
           DietaryRestriction:
           Vegan: {props.data.dietaryRestriction.isVegan ? 'Yes' : 'No'}&nbsp;
           Kosher: {props.data.dietaryRestriction.isKosher ? 'Yes' : 'No'}&nbsp;
           Lactose Free: {props.data.dietaryRestriction.isLactoseFree ? 'Yes' : 'No'}
        </p>
      </main>
    );
}

export default FormComponent;
