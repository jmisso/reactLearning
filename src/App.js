import React from 'react';
import Conditional from './practice/Conditional';
// import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  // run when the component mounts to the screen at very first time.
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
        <h1>Loading...</h1> :
        <Conditional />}
        {/* // <Conditional isLoading={this.state.isLoading} /> */}
      </div>
    )
  }
}

export default App
