import React from "react";
import styles from './SkinType.module.css';

// Import images
import dryImg from "../assets/dry.png";
import acneImg from "../assets/acne.png";
import normalImg from "../assets/Normal.png";
import oilyImg from "../assets/oily.png";
import sensitiveImg from "../assets/Sensitive.png";

const skinConditions = [
  {
    img: dryImg,
    title: "Acne",
    description:
      "Acne is a skin condition that occurs when hair follicles become plugged with oil and dead skin cells, causing whiteheads, blackheads, or pimples. It is most common among teenagers but can affect people of all ages.",
  },
  {
    img: acneImg,
    title: "Acne Scar",
    description:
      "Acne scars are usually the result of inflamed blemishes caused by skin pores engorged with excess oil, dead skin cells, and bacteria. The pore swells, causing a break in the follicle wall.",
  },
  {
    img: normalImg,
    title: "Acanthosis Nigricans",
    description:
      "Acanthosis Nigricans is a skin condition that causes dark discoloration in body folds and creases, typically affecting the armpits, groin, and neck.",
  },
  {
    img: oilyImg,
    title: "Alopecia Areata",
    description:
      "Alopecia Areata is an autoimmune disorder that causes hair to fall out in clumps. The amount of hair loss varies for each person.",
  },
  {
    img: normalImg,
    title: "Melasma",
    description:
      "Melasma causes brown or gray-brown skin patches, usually on the face, often due to sun exposure or hormonal changes.",
  },
  {
    img: sensitiveImg,
    title: "Vitiligo",
    description:
      "Vitiligo is a condition where the skin loses its pigment, leading to white patches. It commonly affects areas exposed to the sun.",
  },
  {
    img: acneImg,
    title: "Warts",
    description:
      "Warts are small, rough skin growths caused by the human papillomavirus (HPV). They are usually harmless but contagious.",
  },
];

const SkinType = () => {
  return (
    <section className={styles.skinType} id="skinType">
      <h1 className={styles.heading}>
        <span>Skin Type and Skin Diseases</span>
      </h1>

      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {skinConditions.map((condition, index) => (
            <div key={index} className={styles.box}>
              <img src={condition.img} alt={condition.title} className={styles.image} />
              <h3>{condition.title}</h3>
              <p>{condition.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinType;
