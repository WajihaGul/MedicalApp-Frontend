import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import Slider from "react-slick";
import DoctorSearch from "../Search/DoctorSearch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Doctor.css";


const Doctor = ({ doctors }) => {
  const { doctorId } = useParams();
  const slider = useRef(null);
  const navigate = useNavigate();

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div style={{ marginTop: "150px" }}>
        <h1 className=" t-tag">Our Doctors</h1>
        <p className=" paragraph">Professionals & Care Provider.</p>
      </div>
      <div>
        <DoctorSearch />
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          { doctors.map((doctor) => ( 
            <div
              className="card doctor-card"
              key={doctor.id}
              onClick={() => navigate(`/doctors/${doctor.id}`)}
            >
              <div className="card-body">
                <img src={doctor.imageUrl} className="card-image"/>
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.specialties}</p>
          
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-div">
        <button
          className=" button-left"
          onClick={() => slider.current.slickPrev()}
        >
          <FaArrowLeft size={25} />
        </button>
        <button
          className=" button-left"
          onClick={() => slider.current.slickNext()}
        >
          <FaArrowRight size={25} />
        </button>
      </div>
      <div className="doctor-container">
        <div className="column">
          <div className="section-title mb-45">
            <div className="section-text">
              <h5>We are available 24/7</h5>
              <h1>We Always Ready For A Challenge.</h1>
            </div>
          </div>
          <div className="section-button mb-30">
            <a className="primary-btn" href="/contact">
              <span className="span">+</span> Make Appointment
            </a>
          </div>
        </div>
        <div className="column">
          <div className="cta-satisfied">
            <div className="single-satisfied mb-50">
              <h1>1M+</h1>
              <h5>Satisfied Patients</h5>
              <p>
                Join a community of over one million satisfied patients who have
                experienced exceptional care and successful treatments. Trust in
                our dedicated team of doctors committed to your health and
                well-being.
              </p>
            </div>
            <div className="single-satisfied mb-50">
              <h1>100+</h1>
              <h5>World Awards</h5>
              <p>
                Our medical team is recognized globally, having received over
                100 prestigious awards. These accolades reflect our unwavering
                commitment to excellence in patient care and innovative medical
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="health-tips-section">
        <h2>Health Tips & Advice</h2>
        <ul>
          <li>Drink plenty of water throughout the day to stay hydrated.</li>
          <li>
            Eat a balanced diet rich in fruits, vegetables, and whole grains.
          </li>
          <li>
            Get regular exercise to maintain a healthy weight and improve your
            overall well-being.
          </li>
          <li>
            Get enough sleep each night to allow your body to rest and recharge.
          </li>
          <li>
            Manage stress through relaxation techniques such as deep breathing,
            meditation, or yoga.
          </li>
          <li>
            Limit your intake of processed foods, sugary drinks, and unhealthy
            snacks.
          </li>
          <li>
            Schedule regular check-ups with your doctor for preventive care and
            early detection of any health issues.
          </li>
          <li>
            Practice good hygiene habits such as washing your hands frequently
            and covering your mouth when you cough or sneeze.
          </li>
          <li>
            Avoid smoking and limit alcohol consumption to reduce your risk of
            chronic diseases.
          </li>
          <li>
            Take breaks from screens and digital devices to reduce eye strain
            and promote mental health.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Doctor;
