import React, { useState } from "react";
import styles from "./CheckSkinType.module.css";

const CheckSkinType = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className={styles.check} id="check">
      <h1 className={styles.heading}>
        <span>Check Your Skin Type</span>
      </h1>

      <input
        type="file"
        id="real-file"
        hidden
        onChange={handleFileChange}
      />

      <center>
        <label htmlFor="real-file" className={styles.customButton}>
          {fileName ? `Selected: ${fileName}` : "Choose A File"}
        </label>
      </center>

      <br />
      <br />

      <center>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </center>
    </section>
  );
};

export default CheckSkinType;
