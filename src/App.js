import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';
import ContactCard from './ContactCard';
import Joke from './practice/Joke';

function App() {
  const firstName = "zelan"
  const lastName = "jia"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  const styles = {
    color: "#FF8C00",
    fontSize: "25px",
  }

  if (hours <12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours>=12 && hours<17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

  return (
    // <div>
    //   <h1>hello {firstName + " " + lastName}</h1>
    //   <h2>{`${firstName} ${lastName}`}</h2>
    //   <h2 style={styles}>It is currently about {date.getHours() %12} o'clock!</h2>
    //   <h2 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}</h2>
    // </div>
    <div className="contacts">
      <ContactCard
        contact={{
          name:"mr. white",
          imgUrl:"http://placekitten.com/300/200",
          phone:"65453543543",
          email:"jhgjg@com"
        }}
      />
      <Joke question="asdf" answer="hgjh"/>
      <Joke answer="hadasui"/>
    </div>
  )
}

export default App;
