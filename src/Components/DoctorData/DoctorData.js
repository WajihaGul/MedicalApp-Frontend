import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./DoctorData.css";
import { Button } from 'react-bootstrap';

const DoctorData = ({ doctors }) => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const goToAppointmentBooking = () => {
    navigate(`/doctor/${doctorId}/book`);

    const handleBookAppointment = async (doctorId) => {
      try {
        // Make a POST request to your Java backend's API endpoint
        const response = await fetch(`http://your-java-backend.com/api/appointments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ doctorId }),
        });
    
        // Check if the request was successful
        if (response.ok) {
          // Handle the successful response
          console.log('Appointment booked successfully!');
        } else {
          // Handle any errors or bad responses
          console.error('Failed to book appointment:', response.statusText);
        }
      } catch (error) {
        // Handle any network errors
        console.error('Error booking appointment:', error);
      }
    };
  };
    // Render the doctor profile
    return (
      <div className="doctor-profile">
        <h2>{doctor.name}</h2>
        <p>Specialties: {doctor.specialties}</p>
        {/* Additional details about the doctor */}
        <div>
          <h3>About {doctor.name}</h3>
          <p>Dr. Ethan Carter is a highly esteemed dermatologist known for his expertise and dedication in the field of dermatology. With years of experience, Dr. Carter has become renowned for his compassionate patient care and commitment to delivering top-quality dermatological treatments. Specializing in a wide range of dermatological conditions, Dr. Carter utilizes the latest advancements in dermatology to provide personalized care tailored to each patient's unique needs.</p>
          <p>Patients appreciate Dr. Carter's thorough approach to diagnosis and treatment, as well as his ability to explain complex medical concepts in a clear and understandable manner. Known for his attention to detail and gentle bedside manner, Dr. Carter ensures that his patients feel comfortable and well-informed throughout their treatment journey.</p>
          <p>Patients appreciate Dr. Carter's thorough approach to diagnosis and treatment, as well as his ability to explain complex medical concepts in a clear and understandable manner. Known for his attention to detail and gentle bedside manner, Dr. Carter ensures that his patients feel comfortable and well-informed throughout their treatment journey.</p>
          {/* Add additional details here */}
        </div>
        {/* Button to book appointment */}
        <Button onClick={handleBookAppointment} variant="primary">Book an Appointment</Button>
      </div>
  );
};

export default DoctorData;
