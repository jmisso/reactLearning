import React from 'react';
// import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    // return the new, udpated state beased upon the props
    // new added into ES7
  }

  getSnapshotBeforeUpdate() {
    // create a backup for the current way things are
  }

  componentDidMount() {
    // get the data I need to correctly display
  }

  // componentWillReceiveProps(nextProps) {

  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return true of want it to update
    // return false if not
  }

  // componentWillUnmount() {
  //   // teardown or cleanup your code before your component disappear
  // }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

export default App
