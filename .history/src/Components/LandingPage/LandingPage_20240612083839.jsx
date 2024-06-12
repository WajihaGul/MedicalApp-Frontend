import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "./LandingPage.module.css";
import doctorshere from "../../Assets/img/doc1.jpg";

const LandingPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img
          className={styles.dblock}
          src="https:hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.974xw:0.729xh;0,0&resize=1200:*"
          alt="First slide"
        /> */}
        <img
          className={styles.dblock}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fdoctors-png-image--839358449278825582%2F&psig=AOvVaw0mWhJSmj3Na5xnD9qsMVdo&ust=1718249581906000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj5otGQ1YYDFQAAAAAdAAAAABAE"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3 className={styles.sliders_h}>Welcome to HealthBuddy</h3>
          <p className={styles.sliders_p}>
            We are dedicated to providing compassionate care and innovative
            medical solutions tailored to your needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.dblock}
          src="https:alt="Second slide" //www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fdoctors-png-image--839358449278825582%2F&psig=AOvVaw0mWhJSmj3Na5xnD9qsMVdo&ust=1718249581906000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj5otGQ1YYDFQAAAAAdAAAAABAE"
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
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fdoctors-png-image--839358449278825582%2F&psig=AOvVaw0mWhJSmj3Na5xnD9qsMVdo&ust=1718249581906000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj5otGQ1YYDFQAAAAAdAAAAABAE"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className={styles.sliders_h}>Convenient Pharmacy Services</h3>
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
