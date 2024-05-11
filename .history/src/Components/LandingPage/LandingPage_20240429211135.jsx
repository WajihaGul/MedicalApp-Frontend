import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src="https://via.placeholder.com/800x400?text=First+Slide"
        alt="First slide"
      />
      <img
        className={styles.image}
        src="https://via.placeholder.com/800x400?text=Second+Slide"
        alt="Second slide"
      />
      <img
        className={styles.image}
        src="https://via.placeholder.com/800x400?text=Third+Slide"
        alt="Third slide"
      />
    </div>
  );
};

export default LandingPage;
