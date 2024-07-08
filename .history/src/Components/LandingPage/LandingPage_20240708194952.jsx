import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel indicators={true} controls={true} fade={true} interval={3000}>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.974xw:0.729xh;0,0&resize=1200:*"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3 className={styles.sliders_h}>Welcome to HealthBuddy</h3>
            <p className={styles.sliders_p}>
              We are dedicated to providing compassionate care and innovative
              medical solutions tailored to your needs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="https://medi-dove.netlify.app/img/home4/about/overlap.png"
            alt="Second slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
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
            className={`d-block w-100 ${styles.carouselImage}`}
            src="https://drz0f01yeq1cx.cloudfront.net/1714474335549-158e1cf4-d33e-41ef-afb5-0ab23aea778c-4929.png"
            alt="Third slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3 className={styles.sliders_h}>Convenient Pharmacy Services</h3>
            <p className={styles.sliders_p}>
              Our pharmacy services make it easy to access the medications you
              need, right from the comfort of your own home.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
