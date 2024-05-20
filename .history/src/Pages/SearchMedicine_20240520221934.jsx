// import React from "react";
// import MedicineCardList from "../Components/SearchMedicine/MedicineCardList";
// const SearchMedicine = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isViewCartOpen, setIsViewCartOpen] = useState(false);
//   const medicines = [
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXF2E5kdHOVFwemRsAvoQYnL7vQoUU_k1haAaPG2kJkQ&s",
//       medicineName: "Aspirin",
//       pharmacyName: "Pharmacy One",
//       price: 20,
//       discountedPrice: 15,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//     {
//       image:
//         "https://pharmafactz.com/wp-content/uploads/2020/07/difference-between-a-drug-and-a-medicine.jpg",
//       medicineName: "Ibuprofen",
//       pharmacyName: "Pharmacy Two",
//       price: 30,
//       discountedPrice: 25,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       medicineName: "Aspirin",
//       pharmacyName: "Pharmacy One",
//       price: 20,
//       discountedPrice: 15,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       medicineName: "Ibuprofen",
//       pharmacyName: "Pharmacy Two",
//       price: 30,
//       discountedPrice: 25,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       medicineName: "Aspirin",
//       pharmacyName: "Pharmacy One",
//       price: 20,
//       discountedPrice: 15,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       medicineName: "Ibuprofen",
//       pharmacyName: "Pharmacy Two",
//       price: 30,
//       discountedPrice: 25,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       medicineName: "Aspirin",
//       pharmacyName: "Pharmacy One",
//       price: 20,
//       discountedPrice: 15,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       medicineName: "Ibuprofen",
//       pharmacyName: "Pharmacy Two",
//       price: 30,
//       discountedPrice: 25,
//       pharmacyLocation: "123 Pharmacy St",
//       rating: 4,
//     },
//   ];

//   return (
//     <div>
//       <MedicineCardList medicines={medicines} />
//     </div>
//   );
// };

// export default SearchMedicine;
// src/App.js
import React, { useState } from "react";
import MedicineCardList from "../Components/SearchMedicine/MedicineCardList";
import CartButton from "../Components/SearchMedicine/CartButton";
import ViewCartPopup from "../Components/SearchMedicine/ViewCartPopup";

const SearchMedicine = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isViewCartOpen, setIsViewCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleViewCart = () => {
    setIsViewCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsViewCartOpen(false);
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <CartButton itemCount={cartItems.length} onViewCart={handleViewCart} />
      <MedicineCardList onAddToCart={handleAddToCart} />
      {isViewCartOpen && (
        <ViewCartPopup
          items={cartItems}
          onClose={handleCloseCart}
          onDecreaseQuantity={handleDecreaseQuantity}
          onIncreaseQuantity={handleIncreaseQuantity}
        />
      )}
    </div>
  );
};

export default SearchMedicine;
