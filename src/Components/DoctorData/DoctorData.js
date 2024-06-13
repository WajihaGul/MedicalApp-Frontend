import React, {useState} from "react";
import "./DoctorData.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import ChatComponent from "../Chat/ChatComponent";

const DoctorData = ({ doctors }) => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <p>Doctor not found</p>;
  }
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const goToAppointmentBooking = () => {
    navigate(`/doctors/${doctorId}/book`);
  };
  return (
    <div className="doctor-profile">
      <h2>{doctor.fullName}</h2>
      <p>{doctor.specialization}</p>
      <div className="image-doc">
      <img src={doctor.imageUpload}  />
      </div>
      <p>{doctor.fullName} is a highly esteemed {doctor.specialization} known for his expertise and dedication in the field of dermatology. With years of experience, {doctor.fullName}  has become renowned for his compassionate patient care and commitment to delivering top-quality dermatological treatments. Specializing in a wide range of {doctor.specialization} conditions, {doctor.fullName}  utilizes the latest advancements in dermatology to provide personalized care tailored to each patient's unique needs.</p>
          <p>Patients appreciate {doctor.fullName} thorough approach to diagnosis and treatment, as well as his ability to explain complex medical concepts in a clear and understandable manner. Known for his attention to detail and gentle bedside manner, {doctor.fullName} ensures that his patients feel comfortable and well-informed throughout their treatment journey.</p>
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
  );
};

export default DoctorData;

