import React, { useState } from 'react';
import './Appointment.css'; 

const Appointment = () => {
  // State variables to store date and time
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Event handlers for date and time input changes
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as sending the appointment details to a backend server
    console.log('Date:', date);
    console.log('Time:', time);
    // Reset the form
    setDate('');
    setTime('');
  };


  return (
    <div className="appointment-container">
      <div className="appointment-content">
          <h1 className="title-tag">Book Appointment</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
            <select id="Specalist" className="input-field">
                <option selected>Specialists</option>
                <option value="ortho">Orthopedic Surgeon</option>
                <option value="Cardio">Cardiologist</option>
                <option value="Ped">Pediatrician</option>
                <option value="Neuro">Neurologist</option>
                <option value="Derma">Dermatologist</option>
                <option value="Op">Ophthalmologist</option>
              </select>
              <select id="doctor" className="input-field">
              <option selected>Doctor</option>
                <option value="1">Dr. Serena Mitchell</option>
                <option value="2">Dr. Julian Bennett</option>
                <option value="3">Dr. Camila Rodriguez</option>
                <option value="4">Dr. Victor Nguyen'</option>
                <option value="5">Dr. Ethan Carter'</option>
                <option value="6">Dr. Julian Bennett</option>
                <option value="7">Dr. Olivia Martinez</option>
              </select>
            </div>
            <div className="form-row">
              <input type="text" id="full_name" className="input-field" placeholder="Your Full Name" required />
              <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="input-field" placeholder="Your Phone Number" required />
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
              <textarea id="message" rows="4" className="textarea-field input-field" placeholder="Special Request"></textarea>
            </div>
            <div className="form-row">
              <button className="button-1">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Appointment;

