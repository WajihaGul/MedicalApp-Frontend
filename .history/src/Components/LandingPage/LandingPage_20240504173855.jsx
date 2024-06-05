import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="{style.d-block w-100}
          src="
          https:alt="First slide" //hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.974xw:0.729xh;0,0&resize=1200:*"
        />
        <Carousel.Caption>
          <h3 className="sliders_h">Welcome to HealthBuddy</h3>
          <p className="sliders_p">
            Welcome to HealthBuddy, your trusted partner in healthcare
            excellence. At our state-of-the-art facility, we are dedicated to
            providing compassionate care and innovative medical solutions
            tailored to your needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.d - block}
          src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="sliders_h">Find Trusted Doctors in Your Area</h3>
          <p className="sliders_p">
            Looking for reliable healthcare professionals in your neighborhood?
            Search no further. HealthBuddy offers a convenient way to find
            trusted doctors in your area. Whether you need a primary care
            physician, specialist, or allied healthcare provider, we've got you
            covered.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.d - block}
          src="https://drz0f01yeq1cx.cloudfront.net/1714474335549-158e1cf4-d33e-41ef-afb5-0ab23aea778c-4929.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="sliders_h">
            Convenient Pharmacy Services at Your Fingertips
          </h3>
          <p className="sliders_p">
            Need to refill your prescriptions or order medications? Look no
            further than HealthBuddy. Our pharmacy services make it easy to
            access the medications you need, right from the comfort of your own
            home.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingPage;
