import React from "react";
import "./Popup.css";

const ConfirmOrderPopup = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h1>
          Your order has been successfully confirmed and will be processed with
          Cash on Delivery.
        </h1>
        <h2>
          Our rider will deliver your order within 3 to 5 working days. We will
          keep you updated via phone and email.
        </h2>
        <h3>
          For any further queries, please contact us at healthbuddy@gmail.com.
        </h3>
      </div>
    </div>
  );
};

export default ConfirmOrderPopup;
