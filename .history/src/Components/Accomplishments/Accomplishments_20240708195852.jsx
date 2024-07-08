import React from "react";
import styles from "./Accomplishments.module.css";

const Accomplishments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.column}>
          <img
            className={styles.cols_img}
            src="https://medi-dove.netlify.app/img/counter/counter-icon-7.png"
            alt=""
          />
          <p className={styles.explanation}>
            540 +
            <br />
            <span>Expert Doctors</span>
          </p>
          <p className={styles.explanationiii}>
            Our team of dedicated professionals ensures personalized care and
            expert guidance tailored to your unique health needs
          </p>
        </div>

        <div className={styles.column}>
          <img
            className={styles.cols_img}
            src="https://medi-dove.netlify.app/img/counter/counter-icon-9.png"
            alt=""
          />
          <p className={styles.explanation}>
            899+
            <br />
            <span>Problem Solve</span>
          </p>
          <p className={styles.explanationiii}>
            Benefit from our extensive expertise in resolving medical
            challenges, offering tailored solutions that prioritize patient
            well-being.
          </p>
        </div>

        <div className={styles.column}>
          <img
            className={styles.cols_img}
            src="https://medi-dove.netlify.app/img/counter/counter-icon-83.png"
            alt=""
          />
          <p className={styles.explanation}>
            100+
            <br />
            <span>Award Winner</span>
          </p>
          <p className={styles.explanationiii}>
            With a track record of excellence, we continue to set the standard
            for cutting-edge medical information and services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
