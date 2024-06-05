// src/components/MedicineCard.js
import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const MedicineCard = ({
  image,
  medicineName,
  pharmacyName,
  price,
  discountedPrice,
}) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={medicineName} />
        <div className="card-body">
          <h5 className="card-title">{medicineName}</h5>
          <p className="card-text">{pharmacyName}</p>
          <p className="card-text">
            <small className="text-muted">
              <s>${price}</s>
            </small>
            <span className="text-danger h5 ml-2">${discountedPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

MedicineCard.propTypes = {
  image: PropTypes.string.isRequired,
  medicineName: PropTypes.string.isRequired,
  pharmacyName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
};

export default MedicineCard;
