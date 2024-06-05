// // src/components/MedicineCardList.js
// import React from "react";
// import MedicineCard from "./MedicineCard";
// import styles from "./SearchMedicine.module.css";

// const MedicineCardList = ({ medicines }) => {
//   return (
//     <div className="container" style={{ marginTop: "150px" }}>
//       <div className="row">
//         {medicines.map((medicine, index) => (
//           <MedicineCard
//             key={index}
//             image={medicine.image}
//             medicineName={medicine.medicineName}
//             pharmacyName={medicine.pharmacyName}
//             price={medicine.price}
//             discountedPrice={medicine.discountedPrice}
//             pharmacyLocation={medicine.pharmacyLocation}
//             rating={medicine.rating}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MedicineCardList;
// src/components/MedicineCardList.js
import React, { useState } from "react";
import MedicineCard from "./MedicineCard";
import SearchBar from "./SearchBar";

const MedicineCardList = ({ medicines }) => {
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
            image={medicine.image}
            medicineName={medicine.medicineName}
            pharmacyName={medicine.pharmacyName}
            pharmacyLocation={medicine.pharmacyLocation}
            price={medicine.price}
            discountedPrice={medicine.discountedPrice}
            rating={medicine.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicineCardList;
