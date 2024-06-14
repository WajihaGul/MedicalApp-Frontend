{/*import React, { useState, useEffect } from 'react';
import './Appointment.css'; 
import DoctorProfile from "../DoctorProfile/DoctorProfile";

const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:8080/bookAppointments');
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
    setAvailableDates(getAvailableDates(doctor));
    setAvailableTimes(getAvailableTimes(doctor));
  };

  const getAvailableDates = (doctor) => {
    const { fromDay, toDay } = doctor;
    const daysMap = {
      Sunday: 1,
      Monday: 2,
      Tuesday: 3,
      Wednesday: 4,
      Thursday: 5,
      Friday: 6,
      Saturday: 7,
    };

    const fromDayIndex = daysMap[fromDay];
    const toDayIndex = daysMap[toDay];
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayIndex = date.getDay();

      if (
        (fromDayIndex <= toDayIndex && dayIndex >= fromDayIndex && dayIndex <= toDayIndex) ||
        (fromDayIndex > toDayIndex && (dayIndex >= fromDayIndex || dayIndex <= toDayIndex))
      ) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }

    return dates;
  };

  const getAvailableTimes = (doctor) => {
    const { startTime, endTime } = doctor;
    const times = [];
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    let current = start;
    while (current <= end) {
      times.push(current.toTimeString().split(' ')[0].substring(0, 5));
      current.setMinutes(current.getMinutes() + 30); // increment by 30 minutes
    }

    return times;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDoctor) {
      console.error('No doctor selected');
      setPopupMessage('Please select a doctor');
      setShowPopup(true);
      return;
    }

    const appointmentData = { date, time, doctor: selectedDoctor };

    try {
      const response = await fetch('http://localhost:8080/bookAppointments', {
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

      setDate('');
      setTime('');
      setSelectedDoctor(null);
      setPopupMessage('Appointment submitted successfully!');
      setShowPopup(true);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setPopupMessage('Failed to submit appointment. Please try again.');
      setShowPopup(true);
    }
  };
  return (
    <div className="appointment-container">
       {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="appointment-content">
        <h1 className="title-tag">Book Appointment</h1>
        <div className="form-container">
          <div className="search-doctors">
            <ul>
              {doctors.map((doctor) => (
                <li key={doctor.id} onClick={() => handleDoctorSelection(doctor)}>
                  {doctor.fullName} - {doctor.specialization}
                </li>
              ))}
            </ul>
          </div>
          {selectedDoctor && <DoctorProfile doctor={selectedDoctor} />}
          <form onSubmit={handleSubmit}>
    
            <div className='form-row'>
            <input type="text" className='input-field' placeholder="Doctor Name" value={selectedDoctor ? selectedDoctor.fullName : ''} readOnly />
            </div>
            <div className="form-row">
            <select
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                className="input-field"
                required
              >
                <option value="">Select Date</option>
                {availableDates.map((availableDate) => (
                  <option key={availableDate} value={availableDate}>
                    {availableDate}
                  </option>
                ))}
              </select>
              <select
                id="time"
                name="time"
                value={time}
                onChange={handleTimeChange}
                className="input-field"
                required
              >
                <option value="">Select Time</option>
                {availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {availableTime}
                  </option>
                ))}
              </select>
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

export default Appointment;*/}

import React, { useState, useEffect } from 'react';
import './Appointment.css'; 
import DoctorProfile from "../DoctorProfile/DoctorProfile";
import ChatComponent from '../Chat/ChatComponent';

const Appointment = ({ backendUrl }) => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [appointmentId, setAppointmentId] = useState(null);
  const [chatActive, setChatActive] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch(`${backendUrl}/bookAppointments`);
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
    setAvailableDates(getAvailableDates(doctor));
    setAvailableTimes(getAvailableTimes(doctor));
  };

  const getAvailableDates = (doctor) => {
    const { fromDay, toDay } = doctor;
    const daysMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const fromDayIndex = daysMap[fromDay];
    const toDayIndex = daysMap[toDay];
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayIndex = date.getDay();

      if (
        (fromDayIndex <= toDayIndex && dayIndex >= fromDayIndex && dayIndex <= toDayIndex) ||
        (fromDayIndex > toDayIndex && (dayIndex >= fromDayIndex || dayIndex <= toDayIndex))
      ) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }

    return dates;
  };

  const getAvailableTimes = (doctor) => {
    const { startTime, endTime } = doctor;
    const times = [];
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    let current = start;
    while (current <= end) {
      times.push(current.toTimeString().split(' ')[0].substring(0, 5));
      current.setMinutes(current.getMinutes() + 30); // increment by 30 minutes
    }

    return times;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDoctor) {
      console.error('No doctor selected');
      setPopupMessage('Please select a doctor');
      setShowPopup(true);
      return;
    }

    const appointmentData = { date, time, doctor: selectedDoctor };

    try {
      const response = await fetch(`${backendUrl}/bookAppointments`, {
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
      setAppointmentId(data.appointmentId);
      setPopupMessage('Appointment submitted successfully!');
      setShowPopup(true);

      setDate('');
      setTime('');
      setSelectedDoctor(null);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setPopupMessage('Failed to submit appointment. Please try again.');
      setShowPopup(true);
    }
  };

  const checkChatStatus = async () => {
    if (!appointmentId) return;

    try {
      const response = await fetch(`${backendUrl}/appointments/startChat/${appointmentId}`);
      if (response.ok) {
        setChatActive(true);
      } else {
        setPopupMessage('Chat is not active until the appointment is accepted');
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Error checking chat status:', error);
      setPopupMessage('Failed to check chat status. Please try again.');
      setShowPopup(true);
    }
  };

  useEffect(() => {
    checkChatStatus();
  }, [appointmentId]);

  return (
    <div className="appointment-container">
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="appointment-content">
        <h1 className="title-tag">Book Appointment</h1>
        <div className="form-container">
          <div className="search-doctors">
            <ul>
              {doctors.map((doctor) => (
                <li key={doctor.id} onClick={() => handleDoctorSelection(doctor)}>
                  {doctor.fullName} - {doctor.specialization}
                </li>
              ))}
            </ul>
          </div>
          {selectedDoctor && <DoctorProfile doctor={selectedDoctor} />}
          <form onSubmit={handleSubmit}>
            {/* Appointment form */}
            <div className='form-row'>
              <input type="text" className='input-field' placeholder="Doctor Name" value={selectedDoctor ? selectedDoctor.fullName : ''} readOnly />
            </div>
            <div className="form-row">
              <select
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                className="input-field"
                required
              >
                <option value="">Select Date</option>
                {availableDates.map((availableDate) => (
                  <option key={availableDate} value={availableDate}>
                    {availableDate}
                  </option>
                ))}
              </select>
              <select
                id="time"
                name="time"
                value={time}
                onChange={handleTimeChange}
                className="input-field"
                required
              >
                <option value="">Select Time</option>
                {availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {availableTime}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <button className="button-1">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {chatActive && <ChatComponent backendUrl={backendUrl} />}
    </div>
  );
};

export default Appointment;


