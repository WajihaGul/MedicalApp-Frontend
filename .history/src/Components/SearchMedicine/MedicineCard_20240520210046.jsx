// // src/components/MedicineCard.js
// import React from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPills,
//   faStore,
//   faMapMarkerAlt,
//   faStar,
// } from "@fortawesome/free-solid-svg-icons";
// import "./SearchMedicine.module.css"; // Import the CSS file

// const MedicineCard = ({
//   image,
//   medicineName,
//   pharmacyName,
//   pharmacyLocation,
//   price,
//   discountedPrice,
//   rating,
// }) => {
//   return (
//     <div className="col-md-3 mb-4">
//       <div className="card h-100">
//         <img
//           src={image}
//           className="card-img-top medicine-image"
//           style={{ height: "250px" }}
//           alt={medicineName}
//         />
//         <div className="card-body">
//           <h5 className="card-title">
//             <FontAwesomeIcon icon={faPills} className="mr-2" />
//             {medicineName}
//           </h5>
//           <p className="card-text">
//             <FontAwesomeIcon icon={faStore} className="mr-2" />
//             {pharmacyName}
//           </p>
//           <p className="card-text">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
//             {pharmacyLocation}
//           </p>
//           <p className="card-text">
//             <small className="text-muted">
//               <s>${price}</s>
//             </small>
//             <span className="text-danger h5 ml-2">${discountedPrice}</span>
//           </p>
//           <p className="card-text">
//             {Array.from({ length: 5 }, (_, index) => (
//               <FontAwesomeIcon
//                 key={index}
//                 icon={faStar}
//                 className={index < rating ? "text-warning" : "text-muted"}
//               />
//             ))}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// MedicineCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   medicineName: PropTypes.string.isRequired,
//   pharmacyName: PropTypes.string.isRequired,
//   pharmacyLocation: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   discountedPrice: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// export default MedicineCard;
// src/components/MedicineCard.js
import "./SearchMedicine.module.css"; // Import the CSS file for custom styles

// src/components/MedicineCard.js
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faStore,
  faMapMarkerAlt,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const MedicineCard = ({
  image,
  medicineName,
  pharmacyName,
  pharmacyLocation,
  price,
  discountedPrice,
  rating,
}) => {
  return (
    <div className="col-md-3 mb-4 medicine-card">
      <div className="card h-100">
        <img
          src={image}
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
          <button className="btn btn-primary btn-add-to-cart">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

MedicineCard.propTypes = {
  image: PropTypes.string.isRequired,
  medicineName: PropTypes.string.isRequired,
  pharmacyName: PropTypes.string.isRequired,
  pharmacyLocation: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MedicineCard;
