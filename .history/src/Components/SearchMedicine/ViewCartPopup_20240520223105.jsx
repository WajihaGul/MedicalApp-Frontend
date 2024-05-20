// src/components/ViewCartPopup.js
import React from "react";
import PropTypes from "prop-types";
import "./ViewCartPopup.css";

const ViewCartPopup = ({
  items,
  onClose,
  onDecreaseQuantity,
  onIncreaseQuantity,
}) => {
  // Calculate total amount
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="view-cart-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>View Cart</h2>
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
                  <button
                    className="quantity-btn"
                    onClick={() => onDecreaseQuantity(index)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => onIncreaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-amount">
          <p>
            <strong>Total Amount:</strong> ${totalAmount}
          </p>
        </div>
        <div className="order-details">
          <h3>Order Details</h3>
          <div className="mb-3">
            <label htmlFor="medicineName" className="form-label">
              Medicine Name
            </label>
            <textarea
              className="form-control"
              id="medicineName"
              name="medicineDesc"
            ></textarea>
          </div>
          {/* Price Discount */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              required
            />
          </div>
          <p className="note">
            <strong>Note:</strong> This will be a Cash on Delivery and the rider
            will reach you in 3 to 5 working days. We will keep in touch with
            you over phone and email. Please reach out to us on
            wajihagul@gmail.com in case of further queries.
          </p>
        </div>
        <div className="cart-buttons">
          <button
            className="btn btn-secondary button-checkout"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="btn btn-primary button-checkout">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

ViewCartPopup.propTypes = {
  items: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
};

export default ViewCartPopup;
