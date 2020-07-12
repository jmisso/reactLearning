import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
