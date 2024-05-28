import React from 'react';
import './DoctorSearch.css';

const DoctorList = ({ doctors }) => {
  if (doctors.length === 0) {
    return <p>No doctors found.</p>;
  }

  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <h2>{doctor.name}</h2>
          <p>{doctor.specialties}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
