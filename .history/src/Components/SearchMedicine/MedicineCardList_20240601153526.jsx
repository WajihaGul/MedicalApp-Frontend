// // // src/components/MedicineCardList.js
// // import React from "react";
// // import MedicineCard from "./MedicineCard";
// // import styles from "./SearchMedicine.module.css";

// // const MedicineCardList = ({ medicines }) => {
// //   return (
// //     <div className="container" style={{ marginTop: "150px" }}>
// //       <div className="row">
// //         {medicines.map((medicine, index) => (
// //           <MedicineCard
// //             key={index}
// //             image={medicine.image}
// //             medicineName={medicine.medicineName}
// //             pharmacyName={medicine.pharmacyName}
// //             price={medicine.price}
// //             discountedPrice={medicine.discountedPrice}
// //             pharmacyLocation={medicine.pharmacyLocation}
// //             rating={medicine.rating}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MedicineCardList;
// // src/components/MedicineCardList.js
//import React, { useState } from "react";
// import MedicineCard from "./MedicineCard";
import SearchBar from "./SearchBar";
// import CartButton from "./CartButton";

// const MedicineCardList = ({ medicines }) => {
// const [searchTerm, setSearchTerm] = useState("");

// const handleSearchChange = (term) => {
//   setSearchTerm(term);
// };

// const filteredMedicines = medicines.filter((medicine) => {
//   return (
//     medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     medicine.pharmacyName.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// });

//   return (
//     <div className="container" style={{ marginTop: "150px" }}>
//       <CartButton />
//       <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
//       <div className="row">
//         {filteredMedicines.map((medicine, index) => (
//           <MedicineCard
//             key={index}
//             image={medicine.image}
//             medicineName={medicine.medicineName}
//             pharmacyName={medicine.pharmacyName}
//             pharmacyLocation={medicine.pharmacyLocation}
//             price={medicine.price}
//             discountedPrice={medicine.discountedPrice}
//             rating={medicine.rating}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MedicineCardList;
// src/components/MedicineCardList.js

//UNCOMMENT CODE
import React, { useState } from "react";
import MedicineCard from "./MedicineCard";

const MedicineCardList = ({ onAddToCart }) => {
  // Sample medicines data
  const medicines = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXF2E5kdHOVFwemRsAvoQYnL7vQoUU_k1haAaPG2kJkQ&s",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
    {
      image:
        "https://pharmafactz.com/wp-content/uploads/2020/07/difference-between-a-drug-and-a-medicine.jpg",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
      quantity: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredMedicines = medicines.filter((medicine) => {
    return (
      medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.pharmacyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="row">
        {filteredMedicines.map((medicine, index) => (
          <MedicineCard
            key={index}
            medicine={medicine}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicineCardList;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MedicineCard from "./MedicineCard";
// import SearchBar from "./SearchBar"; // Assuming you have a SearchBar component

// const MedicineCardList = ({ onAddToCart }) => {
//   const [medicines, setMedicines] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Fetch medicines from the backend API
//     axios
//       .get("http://<backend-ip>:<backend-port>/api/medicines")
//       .then((response) => {
//         setMedicines(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the medicines!", error);
//       });
//   }, []);

//   const handleSearchChange = (term) => {
//     setSearchTerm(term);
//   };

//   const filteredMedicines = medicines.filter((medicine) => {
//     return (
//       medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       medicine.pharmacyName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <div className="container">
//       <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
//       <div className="row">
//         {filteredMedicines.map((medicine, index) => (
//           <MedicineCard
//             key={index}
//             medicine={medicine}
//             onAddToCart={onAddToCart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MedicineCardList;
