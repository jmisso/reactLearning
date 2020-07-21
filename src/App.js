import React from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      facColor: ""
    }
    this.handlChange = this.handlChange.bind(this)
  }

  handlChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({
      [name]: checked
    }) : this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handlChange}>
        <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handlChange} />
        <br />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handlChange} />
        <br />
        <textarea value={"Some default value"} />
        <br />

        <label>
          <input type="radio" value="male" name="gender" checked={this.state.gender === "male"} onChange={this.handlChange} />
        Male
        </label>

        <label>
          <input type="radio" value="female" name="gender" checked={this.state.gender === "female"} onChange={this.handlChange} />
        Female
        </label>

        <label>
          <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handlChange} />
          Is friendly?
        </label>

        <label>
        Favorite Color 
          <select value={this.state.facColor} name="favColor" onChange={this.handlChange}>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>
        </label>


        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Favorite color {this.state.facColor}</h2>
        <button>Submit</button>
      </form>
    )
  }

}

export default App
