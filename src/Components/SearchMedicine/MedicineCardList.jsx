
import React, { useState, useEffect } from "react";
import MedicineCard from "./MedicineCard";
import SearchBar from "./SearchBar";
const MedicineCardList = ({ onAddToCart }) => {
  // Sample medicines data
  // const medicines = [
  //   {
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXF2E5kdHOVFwemRsAvoQYnL7vQoUU_k1haAaPG2kJkQ&s",
  //     medicineName: "Aspirin",
  //     pharmacyName: "Pharmacy One",
  //     price: 20,
  //     discountedPrice: 15,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  //   {
  //     image:
  //       "https://pharmafactz.com/wp-content/uploads/2020/07/difference-between-a-drug-and-a-medicine.jpg",
  //     medicineName: "Ibuprofen",
  //     pharmacyName: "Pharmacy Two",
  //     price: 30,
  //     discountedPrice: 25,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  //   {
  //     image: "https://via.placeholder.com/150",
  //     medicineName: "Aspirin",
  //     pharmacyName: "Pharmacy One",
  //     price: 20,
  //     discountedPrice: 15,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  //   {
  //     image: "https://via.placeholder.com/150",
  //     medicineName: "Ibuprofen",
  //     pharmacyName: "Pharmacy Two",
  //     price: 30,
  //     discountedPrice: 25,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  //   {
  //     image: "https://via.placeholder.com/150",
  //     medicineName: "Aspirin",
  //     pharmacyName: "Pharmacy One",
  //     price: 20,
  //     discountedPrice: 15,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  //   {
  //     image: "https://via.placeholder.com/150",
  //     medicineName: "Ibuprofen",
  //     pharmacyName: "Pharmacy Two",
  //     price: 30,
  //     discountedPrice: 25,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  //   {
  //     image: "https://via.placeholder.com/150",
  //     medicineName: "Aspirin",
  //     pharmacyName: "Pharmacy One",
  //     price: 20,
  //     discountedPrice: 15,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  //   {
  //     image: "https://via.placeholder.com/150",
  //     medicineName: "Ibuprofen",
  //     pharmacyName: "Pharmacy Two",
  //     price: 30,
  //     discountedPrice: 25,
  //     pharmacyLocation: "123 Pharmacy St",
  //     rating: 4,
  //     quantity: 1,
  //   },
  // ];
  const [searchTerm, setSearchTerm] = useState("");
  const [pharmacyList, setPharmacies] = useState();
  const [pharmacies, setPharmaciesList] = useState([]);
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  useEffect(() => {
    const fetchPharmacies = async () => {
debugger
      try {
        const response = await fetch(
          "http://localhost:8080/pharmacy",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPharmacies(data);
        if(data.length > 0){
          data.forEach(element => {
            debugger
            if(element.medicines.length>0){
             
              element.medicines.forEach(item => {
              setPharmaciesList(prev => [...prev, {
                pharmacyId:element.id, 
                pharmacyName: element.name,
                medicineName: item.name,
                medicineid: item.id,
                discountedprice: item.discountedPrice,
                price: item.price,
                pharmacyLocation: element.location,
                quantity: 0,
              }])
          });
          }
          });
        }
        console.log("Success:", data);
      } catch (error) {
        console.error("Error:", error);
        // setError(error.message);
      }
    };

    fetchPharmacies();
  }, []);
  const filteredMedicines = pharmacies.filter((medicine) => {
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
