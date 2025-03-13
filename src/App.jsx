import React from 'react'
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import SkinType from './components/SkinType';



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SkinType />
  
    </div>
  )
}

export default App
