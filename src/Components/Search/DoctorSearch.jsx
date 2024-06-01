import React, { useState, useEffect } from 'react';
import DoctorList from './DoctorList.jsx';
import './DoctorSearch.css';

const doctorsData = [
  { id: 1, name: 'Dr. Serena Mitchell', specialties: 'Orthopedic Surgeon' },
  { id: 2, name: 'Dr. Julian Bennett', specialties: 'Cardiologist' },
  { id: 3, name: 'Dr. Camila Rodriguez', specialties: 'Pediatrician' },
  { id: 4, name: 'Dr. Victor Nguyen', specialties: 'Neurologist' },
  { id: 5, name: 'Dr. Ethan Carter', specialties: 'Dermatologist' },
  { id: 6, name: 'Dr. Olivia Martinez', specialties: 'Ophthalmologist' },
];

const DoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    // Fetch doctor data when the component mounts
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('/api/doctors'); // Replace '/api/doctors' with your backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctorsData(data.doctors); // Assuming the response contains an array of doctors
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialties.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='doctor-search-container'>
        <div className='doctor-search-wrapper'>
      <input
        type="text"
        placeholder="Search by name or specialty"
        value={searchTerm}
        onChange={handleChange}
        className="search-bar"
      />
      </div>
      <div className="doctor-list-wrapper">
      {searchTerm && <DoctorList doctors={filteredDoctors} />}
      </div>
      </div>
  );
};

export default DoctorSearch;
