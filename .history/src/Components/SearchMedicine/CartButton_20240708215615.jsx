import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartButton = ({ itemCount, onViewCart }) => {
  return (
    <div style={{ marginLeft: "auto", marginRight: "20px" }}>
      <button
        className="btn btn-primary"
        style={{
          marginLeft: "auto",
          marginRight: "20px",
          marginTop: "10px", // Adjust margin for smaller screens if needed
        }}
        onClick={onViewCart}
      >
        <span className="badge badge-light mr-2">{itemCount}</span>
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        View Cart
      </button>
    </div>
  );
};

CartButton.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onViewCart: PropTypes.func.isRequired,
};

export default CartButton;
