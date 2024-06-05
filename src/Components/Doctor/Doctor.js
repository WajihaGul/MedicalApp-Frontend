import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useHistory from react-router-dom
import Slider from 'react-slick';
import DoctorSearch from '../Search/DoctorSearch';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Doctor.css';
import { Button} from 'react-bootstrap';

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
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const goToAppointmentBooking = () => {
    navigate(`/doctor/${doctorId}/book`);
  };

  const goToDoctorProfile = (doctorId) => {
    navigate(`/doctor/${doctorId}`); 
  };

  return (
    <div>
      <div>
          <h1 className=" t-tag">
            Our Doctors
          </h1>
          <p className=" paragraph">
            Professionals & Care Provider.
          </p>
        </div>
      <div>
        <DoctorSearch/>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {doctors.map((doctor) => (
            <div className="card doctor-card" key={doctor.id} onClick={() => goToDoctorProfile(doctor.id)}>
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.specialties}</p> 
                <div className="div-button2">
                 <Button 
                  className="custom-button" 
                  onClick={(e) => {
                    e.stopPropagation();
                    goToAppointmentBooking(doctor.id);
                  }}
                >
                  Book an Appointment
                </Button>
                </div>
                <button onClick={toggleChat} className='chat-button'>Chat With Me</button> {/* Button to open chat */}
      {isChatOpen && <ChatComponent />} {/* Render chat component if open */}
                
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
    </div>
    
  );
};

export default Doctor;