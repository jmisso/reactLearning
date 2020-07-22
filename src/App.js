import React from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handlChange = this.handlChange.bind(this)
  }

  handlChange(event) {
    const { name, value, type, checked} = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder="First name"
            onChange={this.handlChange}
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            placeholder="Last name"
            onChange={this.handlChange}
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handlChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handlChange}
            />Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handlChange}
            />Female
            <input
              type="radio"
              name="gender"
              value="other"
              checked={this.state.gender === "other"}
              onChange={this.handlChange}
            />Other
          </label>
          <br />

          <select value={this.state.destination} name="destination" onChange={this.handlChange}>
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
              onChange={this.handlChange}
              checked={this.state.isVegan} />
            Vegan?
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handlChange}
              checked={this.state.isKosher} />
            Kosher?
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handlChange}
              checked={this.state.isLactoseFree} />
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        <p> Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
        <p> Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
        <p> Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    )
  }

}

export default App
