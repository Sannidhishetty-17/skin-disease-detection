import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Skin Care Section */}
          <div className={styles.box}>
            <h3>Skin Care</h3>
            <p>
            "Empowering healthier skin through knowledge and care."
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.box}>
            <h3>Quick Links</h3>
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Types">Skin Type and Disease</a>
            <a href="#Check">Check My Skin Type</a>
            <a href="#Contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
