import React from 'react'
import styles from './Navbar.module.css';
  
const Navbar = () => {
  return ( 
    
    <nav className={styles.nav}>
    <div className={styles.Title}>Skin Disease Detection</div>
    <ul className={styles.sections}>
      <a href="#Home">
        <li className={styles.section}>Home</li>
      </a>
      <a href="#About">
        <li className={styles.section}>About</li>
      </a>
      <a href="#Types">
        <li className={styles.section}>Skin Type and Skin Diseases</li>
      </a>
      <a href="#Check">
        <li className={styles.section}>Check Your Skin Type</li>
      </a>
      <a href="#Contact">
        <li className={styles.section}>Contact</li>
      </a>
    </ul>

  </nav>
);
};



export default Navbar