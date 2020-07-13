import React from 'react'

// function MainContent() {
//   return (
//     <main>
//       <p>this is where most of my content will goo ...</p>
//     </main>
//   )
// }

class MainContent extends React.Component {
  render() {
    return (
      <main>
        <p>Welcome, {this.props.username}</p>
      </main>
    )
  }
}

export default MainContent
