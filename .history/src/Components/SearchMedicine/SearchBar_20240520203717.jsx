// src/components/SearchBar.js
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"; // Import the CSS file

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="input-group mb-4 search-bar">
      <div className="input-group-prepend">
        <span className="input-group-text search-icon" id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Search for medicine or pharmacy..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
