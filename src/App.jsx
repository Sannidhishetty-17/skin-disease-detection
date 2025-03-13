import React from 'react'
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import SkinType from './components/SkinType';
import CheckSkinType from './components/CheckSkinType';



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SkinType />
      <CheckSkinType />
  
    </div>
  )
}

export default App
