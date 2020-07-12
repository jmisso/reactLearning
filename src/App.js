import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  const firstName = "zelan"
  const lastName = "jia"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours <12) {
    timeOfDay = "morning"
  } else if (hours>=12 && hours<17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <div>
      <h1>hello {firstName + " " + lastName}</h1>
      <h2>{`${firstName} ${lastName}`}</h2>
      <h2>It is currently about {date.getHours() %12} o'clock!</h2>
      <h2>Good {timeOfDay}</h2>
    </div>
  )
}

export default App;
