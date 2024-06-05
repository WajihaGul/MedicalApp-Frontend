// src/components/MedicineCardList.js
import React from "react";
import MedicineCard from "./MedicineCard";
import styles from "./SearchMedicine.module.css";

const MedicineCardList = ({ medicines }) => {
  return (
    <div className="container " {styles.containerStyle}>
      <div className="row">
        {medicines.map((medicine, index) => (
          <MedicineCard
            key={index}
            image={medicine.image}
            medicineName={medicine.medicineName}
            pharmacyName={medicine.pharmacyName}
            price={medicine.price}
            discountedPrice={medicine.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicineCardList;
