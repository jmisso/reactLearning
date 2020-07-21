import React from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
          .then(response => response.json())
          .then(data => (
            this.setState({
              loading: false,
              character: data
            })
          ))
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name
    return (
      <div>
        <p>{text}</p>
      </div>
    )
  }

}

export default App
