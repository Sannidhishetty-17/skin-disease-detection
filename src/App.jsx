import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import SkinType from './components/SkinType';
import CheckSkinType from './components/CheckSkinType';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="Home">
        <Home />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Types">
        <SkinType />
      </section>

      <section id="Check">
        <CheckSkinType />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;

