import React, { useState, } from 'react';
import './Appointment.css'; 

const Appointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [doctor, setDoctor] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Event handlers for input changes
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleSpecialistChange = (e) => setSpecialist(e.target.value);
  const handleDoctorChange = (e) => setDoctor(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = { date, time, specialist, doctor, fullName, phone, message };

    try {
      const response = await fetch('/api/appointments', { // Replace '/api/appointments' with your backend endpoint
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
      setSpecialist('');
      setDoctor('');
      setFullName('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };
  return (
    <div className="appointment-container">
      <div className="appointment-content">
          <h1 className="title-tag">Book Appointment</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
            <select id="Specalist" className="input-field" value={specialist} onChange={handleSpecialistChange} required>
                <option selected>Specialists</option>
                <option value="ortho">Orthopedic Surgeon</option>
                <option value="Cardio">Cardiologist</option>
                <option value="Ped">Pediatrician</option>
                <option value="Neuro">Neurologist</option>
                <option value="Derma">Dermatologist</option>
                <option value="Op">Ophthalmologist</option>
              </select>
              <select id="doctor" className="input-field" value={doctor} onChange={handleDoctorChange} required>
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
              <input type="text" id="full_name" className="input-field" placeholder="Your Full Name" value={fullName} onChange={handleFullNameChange} required />
              <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="input-field" placeholder="Your Phone Number" value={phone} onChange={handlePhoneChange} required />
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
              <textarea id="message" rows="4" className="textarea-field input-field" value={message} onChange={handleMessageChange} placeholder="Special Request"></textarea>
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

