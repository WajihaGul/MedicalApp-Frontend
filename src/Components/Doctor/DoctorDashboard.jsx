import React, { useState, useEffect } from 'react';
import { fetchAppointments, acceptAppointment, cancelAppointment } from '../../Services/Api';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const data = await fetchAppointments();
        // Ensure the response is an array
        if (Array.isArray(data)) {
          setAppointments(data);
          console.log(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError('Failed to fetch appointments.');
        setAppointments([]); // Ensure appointments is an array in case of error
      }
    };
    loadAppointments();
  }, []);

  const handleAccept = async (appointmentId) => {
    try {
      await acceptAppointment(appointmentId);
      setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
      alert('Appointment accepted successfully');
    } catch (error) {
      setError('Failed to accept appointment.');
    }
  };

  const handleCancel = async (appointmentId) => {
    try {
      await cancelAppointment(appointmentId);
      setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
      alert('Appointment canceled successfully');
    } catch (error) {
      setError('Failed to cancel appointment.');
    }
  };

  return (
    <div className='dashboard'>
      <h2>Doctor Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className='table'>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Patient Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.appointmentTime}</td>
                <td>{appointment.patient.name}</td>
                <td>
                  <button onClick={() => handleAccept(appointment.id)}>Accept</button>
                  <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No appointments available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboard;
