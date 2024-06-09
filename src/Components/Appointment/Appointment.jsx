import React, { useState, useEffect } from 'react';
import './Appointment.css'; 

const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch doctor data from backend when component mounts
    fetchDoctors();
  }, []);

  // Function to fetch doctors from backend
  const fetchDoctors = async () => {
    try {
      const response = await fetch('/api/doctors'); // Replace '/api/doctors' with your backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  // Event handlers for input changes
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Function to handle doctor selection
  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDoctor) {
      console.error('No doctor selected');
      return;
    }

    const appointmentData = { date, time, doctor: selectedDoctor, fullName, phone, message };

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }

      const data = await response.json();
      console.log('Appointment submitted successfully:', data);

      // Reset the form
      setDate('');
      setTime('');
      setMessage('');
      setSelectedDoctor(null);
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <h1 className="title-tag">Book Appointment</h1>
        <div className="form-container">
          <div className="search-doctors">
            {/* Doctor search component goes here */}
            {/* Display doctors */}
            <ul>
              {doctors.map((doctor) => (
                <li key={doctor.id} onClick={() => handleDoctorSelection(doctor)}>
                  {doctor.name} - {doctor.specialty}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Appointment form */}
            <div className='form-row'>
            <input type="text" className='input-field' placeholder="Doctor Name" value={selectedDoctor ? selectedDoctor.name : ''} readOnly />
            </div>
            <div className="form-row">
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                className="input-field"
                required
              />
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={handleTimeChange}
                className="input-field"
                required
              />
            </div>
            <div className="form-row">
              <button className="button-1">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

