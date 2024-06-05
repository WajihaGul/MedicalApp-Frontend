import React from "react";
import MedicineCardList from "../Components/SearchMedicine/MedicineCardList";

const SearchMedicine = () => {
  const medicines = [
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
