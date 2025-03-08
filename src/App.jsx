import React from 'react'
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
  
    </div>
  )
}

export default App
