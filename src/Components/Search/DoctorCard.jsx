import React from "react";
import PropTypes from "prop-types";
import "./DoctorCard.css"; // Make sure to create and style this CSS file

const DoctorCard = ({ doctor }) => {
    if (!doctor) {
        return null; // Handle the case when the doctor object is undefined
      }
  const { imageUpload, fullName, specialization } = doctor;

  return (
    <div className="col-md-3 mb-4 doctor-card">
      <div className="card h-100">
        
    
        <div className="card-body">
        <img
          src={imageUpload}
          style={{ height: "250px" }}
          className="card-img-top doctor-image"
        />
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text">{specialization}</p>
        </div>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    imageUpload: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
