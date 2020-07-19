import React from 'react';
// import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((preState) => {
      return {
        count: preState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        {/* if you want to pass state into childComponent */}
        {/* <ChildComponent count={this.state.count} /> */}
        {/* App will refresh render() which also render the ChildComponent */}
      </div>
    )
  }
}

export default App
