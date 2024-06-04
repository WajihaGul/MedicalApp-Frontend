import React, { useState, useEffect } from 'react';
import './DoctorSearch.css';

const DoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);

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
      setDoctors(data); // Assuming the response contains an array of doctors
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='doctor-search-background'>
      <div className='doctor-search-container'>
        <input
          type="text"
          placeholder="Search Doctors"
          value={searchTerm}
          onChange={handleChange}
          className="search-bar"
        />
        <div className="search-results">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialties}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;

