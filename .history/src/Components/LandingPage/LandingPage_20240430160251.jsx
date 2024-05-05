import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.974xw:0.729xh;0,0&resize=1200:*"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: "24px" }}>Welcome to HealthBuddy</h3>
          <p style={{ fontSize: "18px" }}>
            Welcome to HealthBuddy, your trusted partner in healthcare
            excellence. At our state-of-the-art facility, we are dedicated to
            providing compassionate care and innovative medical solutions
            tailored to your needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: "24px" }}>
            Find Trusted Doctors in Your Area
          </h3>
          <p style={{ fontSize: "18px" }}>
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
          className="d-block w-100"
          src="https://drz0f01yeq1cx.cloudfront.net/1714474335549-158e1cf4-d33e-41ef-afb5-0ab23aea778c-4929.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: "24px" }}>
            Convenient Pharmacy Services at Your Fingertips
          </h3>
          <p style={{ fontSize: "18px" }}>
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
