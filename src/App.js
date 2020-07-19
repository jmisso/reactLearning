import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';
import ContactCard from './ContactCard';
import Joke from './practice/Joke';
import jokeData from './practice/jokeData';

// function App() {
//   const firstName = "zelan"
//   const lastName = "jia"
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

//   const styles = {
//     color: "#FF8C00",
//     fontSize: "25px",
//   }

//   if (hours < 12) {
//     timeOfDay = "morning"
//     styles.color = "#04756F"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//     styles.color = "#8914A3"
//   } else {
//     timeOfDay = "night"
//     styles.color = "#D90000"
//   }

//   return (
//     // <div>
//     //   <h1>hello {firstName + " " + lastName}</h1>
//     //   <h2>{`${firstName} ${lastName}`}</h2>
//     //   <h2 style={styles}>It is currently about {date.getHours() %12} o'clock!</h2>
//     //   <h2 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}</h2>
//     // </div>
//     <div className="contacts">
//       <ContactCard
//         contact={{
//           name: "mr. white",
//           imgUrl: "http://placekitten.com/300/200",
//           phone: "65453543543",
//           email: "jhgjg@com"
//         }}
//       />
//       <Joke question="asdf" answer="hgjh" />
//       <Joke answer="hadasui" />
//       {jokeComponents}
//     </div>
//   )
// }

// class based component
// class App extends React.Component {
//   render() {
//     const date = new Date();
//     return (
//       <div>
//         <NavBar />
//         <MainContent username="Zelan" />
//         <Footer />
//       </div>
//     )
//   }
// }

// state
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <NavBar />
//         <MainContent username="Zelan" />
//         <Footer />
//         <h2>
//           Is state important to know? {this.state.answer}
//         </h2>
//       </div>
//     )
//   }
// }

function handleClick() {
  console.log("clicked")
}

function App() {
  return (
    <div>
      <img onMouseOver={() => console.log("hoverd!")}src="http://placekitten.com/300/200" />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App;
