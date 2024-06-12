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
          src="https://www.google.com/imgres?q=doctors%20images%20in%20png&imgurl=https%3A%2F%2Fimages.rawpixel.com%2Fimage_png_800%2FcHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3JtNTMwLTM0MC1zOTAtYXUtMDFfMS5wbmc.png&imgrefurl=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fdoctor&docid=Uug7hxZ_upTEhM&tbnid=wkOYkdxjsbY2BM&vet=12ahUKEwjlvdmIktWGAxVG_gIHHQhaDXAQM3oECCgQAA..i&w=800&h=533&hcb=2&ved=2ahUKEwjlvdmIktWGAxVG_gIHHQhaDXAQM3oECCgQAA"
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
          src="https://www.google.com/imgres?q=doctors%20images%20in%20png&imgurl=https%3A%2F%2Fimages.rawpixel.com%2Fimage_png_800%2FcHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3JtNTMwLTM0MC1zOTAtYXUtMDFfMS5wbmc.png&imgrefurl=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fdoctor&docid=Uug7hxZ_upTEhM&tbnid=wkOYkdxjsbY2BM&vet=12ahUKEwjlvdmIktWGAxVG_gIHHQhaDXAQM3oECCgQAA..i&w=800&h=533&hcb=2&ved=2ahUKEwjlvdmIktWGAxVG_gIHHQhaDXAQM3oECCgQAA"
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
