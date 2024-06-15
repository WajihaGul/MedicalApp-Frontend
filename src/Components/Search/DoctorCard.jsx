import React, {useState} from "react";
import PropTypes from "prop-types";
import "./DoctorCard.css"; 
import "./DoctorData.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import ChatComponent from "../Chat/ChatComponent";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
    if (!doctor) {
        return null; // Handle the case when the doctor object is undefined
      }
    const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const goToAppointmentBooking = () => {
    navigate(`/doctors/${doctorId}/book`);
  };
  const { imageUpload, fullName, specialization } = doctor;

  return (
    <div className="col-md-3 mb-4 doctor-card">
      <div className="card h-100">
        
    
        <div className="card-body">
        <img
          src={imageUpload}
          style={{ height: "250px" }}
          className="card-img-top doctor-image"
        />
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text">{specialization}</p>
          <div className="div-button2">
                  <Button
                    className="custom-button3"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToAppointmentBooking(doctor.id);
                    }}
                  >
                    Book an Appointment
                  </Button>
                </div>
                <button onClick={toggleChat} className="chat-button">
                  Chat With Me
                </button>{" "}
                {isChatOpen && <ChatComponent />}{" "}
        </div>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUpload: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
