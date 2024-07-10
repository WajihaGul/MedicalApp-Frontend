import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faStore,
  faMapMarkerAlt,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PropTypes from "prop-types";

const MedicineCard = ({ medicine, onAddToCart }) => {
  const {
    image,
    medicineName,
    pharmacyName,
    pharmacyLocation,
    price,
    discountedPrice,
    rating,
    quantity,
  } = medicine;

  return (
    <div className="col-md-3 mb-4 medicine-card">
      <div className="card h-100">
        <img
          src="https://i.guim.co.uk/img/media/20491572b80293361199ca2fc95e49dfd85e1f42/0_236_5157_3094/master/5157.jpg?width=620&dpr=2&s=none"
          style={{ height: "250px" }}
          className="card-img-top medicine-image"
          alt={medicineName}
        />
        <div className="card-body">
          <h5 className="card-title">
            <FontAwesomeIcon icon={faPills} className="mr-2" />
            {medicineName}
          </h5>
          <p className="card-text">
            <FontAwesomeIcon icon={faStore} className="mr-2" />
            {pharmacyName}
          </p>
          <p className="card-text">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {pharmacyLocation}
          </p>
          <p className="card-text">
            <small className="text-muted">
              <s>${price}</s>
            </small>
            <span className="text-danger h5 ml-2">${discountedPrice}</span>
          </p>
          <p className="card-text">
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < rating ? "text-warning" : "text-muted"}
              />
            ))}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(medicine)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

MedicineCard.propTypes = {
  medicine: PropTypes.shape({
    image: PropTypes.string.isRequired,
    medicineName: PropTypes.string.isRequired,
    pharmacyName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    pharmacyLocation: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MedicineCard;
