import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <section className={styles.contact} id="contact">
      <h1 className={styles.heading}>
        <span>Contact</span> Us
      </h1>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.box}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.box}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Number"
                className={styles.box}
                value={formData.number}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className={styles.box}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <input type="submit" className={styles.submitButton} value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
