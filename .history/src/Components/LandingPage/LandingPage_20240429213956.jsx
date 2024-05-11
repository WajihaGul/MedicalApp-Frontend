import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=First+Slide"
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
