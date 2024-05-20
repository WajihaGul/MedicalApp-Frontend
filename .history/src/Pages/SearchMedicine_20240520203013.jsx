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
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
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
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Aspirin",
      pharmacyName: "Pharmacy One",
      price: 20,
      discountedPrice: 15,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
    },
    {
      image: "https://via.placeholder.com/150",
      medicineName: "Ibuprofen",
      pharmacyName: "Pharmacy Two",
      price: 30,
      discountedPrice: 25,
      pharmacyLocation: "123 Pharmacy St",
      rating: 4,
    },
  ];

  return (
    <div>
      <MedicineCardList medicines={medicines} />
    </div>
  );
};

export default SearchMedicine;
