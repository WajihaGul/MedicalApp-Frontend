import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "./Doctor.css"
import DoctorSearch from '../Search/DoctorSearch';

const Doctor = () => {
    const data = [
        {
          img: "/src/Assets/img/doc1.jpg",
          name: "Dr. Serena Mitchell",
          specialties: "Orthopedic Surgeon",
        },
        {
          img: "/src/Assets/img/doc2.jpg",
          name: "Dr. Julian Bennett",
          specialties: "Cardiologist",
        },
        {
          img: "/src/Assets/img/doc3.jpg",
          name: "Dr. Camila Rodriguez",
          specialties: "Pediatrician",
        },
        {
          img: "/src/Assets/img/doc4.jpg",
          name: "Dr. Victor Nguyen",
          specialties: "Neurologist",
        },
        {
          img: "/src/Assets/img/doc5.jpg",
          name: "Dr. Ethan Carter",
          specialties: "Dermatologist",
        },
        {
          img: "/src/Assets/img/doc6.jpg",
          name: "Dr. Olivia Martinez",
          specialties: "Ophthalmologist",
        },
      ];
  
    const slider = useRef(null);
  
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
    <div className=" flex-div">
      <div className=" flex-div2">
        <div>
          <h1 className=" t-tag">
            Our Doctors
          </h1>
          <p className=" paragraph">
            Professionals & Care Provider.
          </p>
        </div>
        <DoctorSearch/>
        <div className="flex gap-5 mt-4 lg:mt-0">
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
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="card"
              key={index}
            >
              <div className=''>
                <img
                  src={e.img}
                  alt="img"
                  className=" image"
                />
              </div>

              <div className=" main-container">
                <h1 className=" name-container">{e.name}</h1>
                <h3 className=" specialties-container">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    
      <div className="container">
      <div className="column">
        <div className="section-title mb-45">
          <div className="section-text">
            <h5>We are available 24/7</h5>
            <h1>We Always Ready For A Challenge.</h1>
          </div>
        </div>
        <div className="section-button mb-30">
          <a className="primary-btn" href="/contact"><span className="span">+</span> Make Appointment</a>
          
        </div>
      </div>
      <div className="column">
        <div className="cta-satisfied">
          <div className="single-satisfied mb-50">
            <h1>1M+</h1>
            <h5>Satisfied Patients</h5>
            <p>Join a community of over one million satisfied patients who have experienced exceptional care and successful treatments. Trust in our dedicated team of doctors committed to your health and well-being.</p>
          </div>
          <div className="single-satisfied mb-50">
            <h1>100+</h1>
            <h5>World Awards</h5>
            <p>Our medical team is recognized globally, having received over 100 prestigious awards. These accolades reflect our unwavering commitment to excellence in patient care and innovative medical practices.</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className='chat'>
      <button className="chat-button">Chat With Me</button>
    </div>

    </div>
       
)
 }
export default Doctor
