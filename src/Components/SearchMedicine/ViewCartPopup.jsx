// src/components/ViewCartPopup.js
import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleContactChange = (event) => {
    setContactNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const handleProceedToCheckout = () => {
    setShowOrderDetails(true);
  };
  const handleConfirmOrder = async () => {
    debugger
    const orderDetails = {
            items,
            totalAmount,
            name,
            address,
            contactNumber,
            email,
          };
      console.log(orderDetails);
          try {
            const response = await axios.post(
              "http://<backend-ip>:<backend-port>/api/orders",
              orderDetails
            );
            console.log(response.data);
            // Handle successful order placement
          } catch (error) {
            console.error("There was an error placing the order!", error);
          }
    //setShowOrderDetails(true);
  };
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
        {showOrderDetails && (
          <div className="order-details">
            <h3>Order Details</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                onChange={handleAddressChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="contactNumber"
                name="contactNumber"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                onChange={handleEmailChange}
              />
            </div>
            <p className="note">
              <strong>Note:</strong> This will be a Cash on Delivery and the
              rider will reach you in 3 to 5 working days. We will keep in touch
              with you over phone and email. Please reach out to us on
              wajihagul@gmail.com in case of further queries.
            </p>
          </div>
        )}
        <div className="button-checkout">
          <button
            className="btn btn-secondary button-checkout"
            onClick={onClose}
          >
            Cancel
          </button>
          {!showOrderDetails && (
            <button
              className="btn btn-primary button-checkout"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          )}
          {showOrderDetails && (
            <button
              className="btn btn-primary button-checkout"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          )}
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

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// import "./ViewCartPopup.css";

// const ViewCartPopup = ({
//   items,
//   onClose,
//   onDecreaseQuantity,
//   onIncreaseQuantity,
// }) => {
//   // Calculate total amount
//   const totalAmount = items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const [showOrderDetails, setShowOrderDetails] = useState(false);
//   const [address, setAddress] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");

//   const handleProceedToCheckout = () => {
//     setShowOrderDetails(true);
//   };

//   const handleConfirmOrder = async () => {
//     const orderDetails = {
//       items,
//       totalAmount,
//       address,
//       contactNumber,
//       email,
//     };

//     try {
//       const response = await axios.post(
//         "http://<backend-ip>:<backend-port>/api/orders",
//         orderDetails
//       );
//       console.log(response.data);
//       // Handle successful order placement
//     } catch (error) {
//       console.error("There was an error placing the order!", error);
//     }
//   };

//   return (
//     <div className="view-cart-popup">
//       <div className="popup-content">
//         <button className="close-btn" onClick={onClose}>
//           Close
//         </button>
//         <h2>View Cart</h2>
//         <div className="cart-items">
//           {items.map((item, index) => (
//             <div className="cart-item" key={index}>
//               <img src={item.image} alt={item.medicineName} />
//               <div className="item-info">
//                 <div className="medicine-info">
//                   <p className="medicine-name">{item.medicineName}</p>
//                   <p className="pharmacy-name">{item.pharmacyName}</p>
//                   <p className="pharmacy-name">${item.price}</p>
//                 </div>
//               </div>
//               <div className="price-quantity">
//                 <div className="quantity-controls">
//                   <button
//                     className="quantity-btn"
//                     onClick={() => onDecreaseQuantity(index)}
//                   >
//                     -
//                   </button>
//                   <span className="quantity">{item.quantity}</span>
//                   <button
//                     className="quantity-btn"
//                     onClick={() => onIncreaseQuantity(index)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="total-amount">
//           <p>
//             <strong>Total Amount:</strong> ${totalAmount}
//           </p>
//         </div>
//         {showOrderDetails && (
//           <div className="order-details">
//             <h3>Order Details</h3>
//             <div className="mb-3">
//               <label htmlFor="address" className="form-label">
//                 Address
//               </label>
//               <textarea
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="contactNumber" className="form-label">
//                 Contact Number
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="contactNumber"
//                 name="contactNumber"
//                 value={contactNumber}
//                 onChange={(e) => setContactNumber(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <p className="note">
//               <strong>Note:</strong> This will be a Cash on Delivery and the
//               rider will reach you in 3 to 5 working days. We will keep in touch
//               with you over phone and email. Please reach out to us on
//               wajihagul@gmail.com in case of further queries.
//             </p>
//           </div>
//         )}
//         <div className="button-checkout">
//           <button
//             className="btn btn-secondary button-checkout"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           {!showOrderDetails && (
//             <button
//               className="btn btn-primary button-checkout"
//               onClick={handleProceedToCheckout}
//             >
//               Proceed to Checkout
//             </button>
//           )}
//           {showOrderDetails && (
//             <button
//               className="btn btn-primary button-checkout"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// ViewCartPopup.propTypes = {
//   items: PropTypes.array.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onDecreaseQuantity: PropTypes.func.isRequired,
//   onIncreaseQuantity: PropTypes.func.isRequired,
// };

// export default ViewCartPopup;
