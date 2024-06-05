// src/components/ViewCartPopup.js
import React from "react";
import PropTypes from "prop-types";
import "./ViewCartPopup.css";

const ViewCartPopup = ({ items, onClose }) => {
  return (
    <div className="view-cart-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <div className="cart-items">
          {items.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.medicineName} />
              <div className="item-info">
                <div className="medicine-info">
                  <p className="medicine-name">{item.medicineName}</p>
                  <p className="pharmacy-name">{item.pharmacyName}</p>
                  <p className="pharmacy-name">${item.price}</p>
                </div>
              </div>
              <div className="price-quantity">
                <div className="quantity-controls">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">5</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ViewCartPopup.propTypes = {
  items: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ViewCartPopup;
