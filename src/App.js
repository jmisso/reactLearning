import React from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handlChange = this.handlChange.bind(this)
  }

  handlChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handlChange} />
        <br />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handlChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }

}

export default App
