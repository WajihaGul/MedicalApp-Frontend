import React, { useState } from "react";
import styles from "./AddMedicinePopup.module.css";
import { Button } from "react-bootstrap";
import axios from "axios";
const AddMedicinePopup = ({ onClose, medicine, addMedicine }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMedicine = {
      name: formData.get("medicineName"),
      description: formData.get("description"),
      //image: formData.get("image"),
      price: formData.get("price"),
      discount: formData.get("discount"),
      stock: 11,
    };
    
      if (medicine.id > 0) {
        try {
          let response;
          debugger
        response = await fetch(
          `http://localhost:8080/medicine/updateMedicine/${medicine.id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newMedicine),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Success:", data);
      } 
catch (error) {
      console.error("Error:", error);
      // setError(error.message);
    }
  }
    else{
    addMedicine(newMedicine);
    }
    onClose();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>Add Medicine</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="medicineName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="medicineName"
              name="medicineName"
              value={medicine.name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              value={medicine.description}
              name="description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input type="file" class="form-control" id="image" name="image" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={medicine.price}
              name="price"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="discount" className="form-label">
              Discount (%)
            </label>
            <input
              type="number"
              className="form-control"
              id="discount"
              value={medicine.discount}
              name="discount"
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="inStock"
              checked={medicine.InStock}
              name="inStock"
            />
            <label className="form-check-label" htmlFor="inStock">
              In Stock
            </label>
          </div>
          {/* Submit Button */}
          <div className={styles.buttons}>
            <Button variant="success" className={styles.saveBtn} type="submit">
              Add
            </Button>
            <Button
              variant="danger"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicinePopup;
