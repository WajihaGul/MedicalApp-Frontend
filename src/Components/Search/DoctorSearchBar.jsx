import React from "react";
import PropTypes from "prop-types";
import "./DoctorSearchBar.module.css";

const DoctorSearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar1 mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          style={{ borderRadius: "50px", width: "50px" }}
          placeholder="Search Doctors..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

DoctorSearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default DoctorSearchBar;