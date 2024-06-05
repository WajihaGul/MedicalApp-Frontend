import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="htdata:image/png;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to HealthBuddy</h3>
          <p>
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
          src="https://via.placeholder.com/800x400?text=Second+Slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Find Trusted Doctors in Your Area</h3>
          <p>
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
          src="https://via.placeholder.com/800x400?text=Third+Slide"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Convenient Pharmacy Services at Your Fingertips</h3>
          <p>
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
