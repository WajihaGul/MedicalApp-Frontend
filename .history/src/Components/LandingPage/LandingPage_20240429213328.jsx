import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://medi-dove.netlify.app/img/about/about-img.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3_j2IclicYE7jOqUR4p8dhlMEDFnc3TYGQ&s"
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
