import React from "react";
import MedicineCardList from "../Components/SearchMedicine/MedicineCardList";

const SearchMedicine = () => {
  const medicines = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXF2E5kdHOVFwemRsAvoQYnL7vQoUU_k1haAaPG2kJkQ&s",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
    },
  ];

  return (
    <div>
      <MedicineCardList medicines={medicines} />
    </div>
  );
};

export default SearchMedicine;
