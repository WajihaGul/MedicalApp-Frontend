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
          src="https://www.google.com/imgres?q=medicine&imgurl=https%3A%2F%2Fmedshadow.org%2Fwp-content%2Fuploads%2F2012%2F11%2Fmedicine-883x577.jpeg&imgrefurl=https%3A%2F%2Fmedshadow.org%2Fwhat-are-long-term-effects-of-medicine%2F&docid=2-HsvDC0bitowM&tbnid=hoPxBwR2WyAp0M&vet=12ahUKEwjb-OL9upqHAxXpAtsEHV3pBbUQM3oECGYQAA..i&w=883&h=577&hcb=2&ved=2ahUKEwjb-OL9upqHAxXpAtsEHV3pBbUQM3oECGYQAA"
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
