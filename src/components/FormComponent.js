import React from 'react';

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firstName"
          value={props.data.firstName}
          placeholder="First name"
          onChange={props.handlChange}
        />
        <br />
        <input
          name="lastName"
          value={props.data.lastName}
          placeholder="Last name"
          onChange={props.handlChange}
        />
        <br />
        <input
          name="age"
          value={props.data.age}
          placeholder="Age"
          onChange={props.handlChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handlChange}
          />Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handlChange}
          />Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={props.data.gender === "other"}
            onChange={props.handlChange}
          />Other
        </label>
        <br />

        <select value={props.data.destination} name="destination" onChange={props.handlChange}>
          <option value="">--</option>
          <option value="Washington DC">Washington DC</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Qinhuangdao">Qinhuangdao</option>
          <option value="Seattle">Seattle</option>
        </select>
        <br />

        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handlChange}
            checked={props.data.isVegan} />
          Vegan?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handlChange}
            checked={props.data.isKosher} />
          Kosher?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handlChange}
            checked={props.data.isLactoseFree} />
          Lactose Free?
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>Your dietary restrictions:</p>
      <p> Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
      <p> Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
      <p> Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
    </main>
  )
}

export default FormComponent