import React from "react";
import styles from "./About.module.css";
import SplineCompo from "./SplineCompo";

const About = () => {
  return (
    <div className={styles.home}>
      <div className={styles.inside}>
        <h1 className={styles.Name}>
          What are Skin Diseases?
        </h1>
        <p className={styles.info}>
        Skin diseases are conditions that affect your skin. These diseases may cause rashes, inflammation, itchiness, or other skin changes. Some skin conditions may be genetic, while lifestyle factors may cause others. Skin disease treatment may include medications, creams or ointments, or lifestyle changes.
      
It becomes important to identify these diseases at their initial stage to control them from spreading. Since there are a large number of different skin diseases, manually identifying them can be a difficult task. Our disease detection and classification can help in early identification of disease, preventing it from becoming chronic.
        </p>
        <button className={styles.Contactbutton}>Learn More</button>
      </div>
      <div>
        <SplineCompo />
      </div>
    </div>
  );
};

export default About;

