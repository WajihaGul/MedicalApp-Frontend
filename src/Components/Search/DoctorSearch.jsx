{/*import React, { useState } from 'react';
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

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialties.toLowerCase().includes(searchTerm.toLowerCase())
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
      </div>
      <div className="doctor-list-wrapper">
        {searchTerm && <DoctorList doctors={filteredDoctors} />}
      </div>
    </div>
  );
};

export default DoctorSearch;*/}

import React, { useState } from "react";
import PropTypes from "prop-types";
import DoctorSearchBar from "./DoctorSearchBar";
import DoctorCard from "./DoctorCard";
import "./DoctorSearch.css";

const DoctorSearch = ({ backendUrl }) => {
  const [query, setQuery] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = (value) => {
    setQuery(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${backendUrl}/doctors/name?search=${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.fullName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="doctor-search-background1">
      <form onSubmit={handleSearch}>
        <DoctorSearchBar searchTerm={query} onSearchChange={handleSearchChange} />
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

DoctorSearch.propTypes = {
  backendUrl: PropTypes.string.isRequired,
};

export default DoctorSearch;
