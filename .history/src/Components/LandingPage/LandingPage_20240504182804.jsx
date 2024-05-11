import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={styles.dblock}
          src="https:hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.974xw:0.729xh;0,0&resize=1200:*"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={styles.sliders_h}>Welcome to HealthBuddy</h3>
          <p className={styles.sliders_p}>
            Welcome to HealthBuddy, we are dedicated to providing compassionate
            care and innovative medical solutions tailored to your needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.dblock}
          src="https://live-core-image-service.vivialplatform.net/images/244505/1920x480/foley-al-medical-scrubs_cropped.HO3uQYCmj.jpg.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className={styles.sliders_h}>
            Find Trusted Doctors in Your Area
          </h3>
          <p className={styles.sliders_p}>
            Whether you need a primary care physician, specialist, or allied
            healthcare provider, we've got you covered.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.dblock}
          src="https://drz0f01yeq1cx.cloudfront.net/1714474335549-158e1cf4-d33e-41ef-afb5-0ab23aea778c-4929.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className={styles.sliders_h}>
            Convenient Pharmacy Services at Your Fingertips
          </h3>
          <p className={styles.sliders_p}>
            Our pharmacy services make it easy to access the medications you
            need, right from the comfort of your own home.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingPage;
