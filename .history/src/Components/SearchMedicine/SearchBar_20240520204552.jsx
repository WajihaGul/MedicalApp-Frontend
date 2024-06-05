import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchMedicine.module.css";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for medicine or pharmacy..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
