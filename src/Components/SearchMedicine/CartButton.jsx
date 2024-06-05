// src/components/CartButton.js
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ViewCartPopup.css";

const CartButton = ({ itemCount, onViewCart }) => {
  return (
    <div className="cart-button">
      <button className="btn btn-primary" onClick={onViewCart}>
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

// src/components/CartButton.js
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import "./ViewCartPopup.css";

// const CartButton = ({ onViewCart }) => {
//   const [itemCount, setItemCount] = useState(0);

//   useEffect(() => {
//     const fetchItemCount = async () => {
//       try {
//         const response = await axios.get(
//           "http://<backend-ip>:<backend-port>/api/cart/count"
//         );
//         setItemCount(response.data.count);
//       } catch (error) {
//         console.error("Error fetching item count:", error);
//       }
//     };

//     fetchItemCount();
//   }, []);

//   return (
//     <div className="cart-button">
//       <button className="btn btn-primary" onClick={onViewCart}>
//         <span className="badge badge-light mr-2">{itemCount}</span>
//         <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
//         View Cart
//       </button>
//     </div>
//   );
// };

// CartButton.propTypes = {
//   onViewCart: PropTypes.func.isRequired,
// };

// export default CartButton;
