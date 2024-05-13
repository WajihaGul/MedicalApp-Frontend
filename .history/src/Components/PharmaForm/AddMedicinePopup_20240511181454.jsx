import React, { useState } from "react";
import styles from "./AddMedicinePopup.module.css";
import { Button } from "react-bootstrap";

const AddMedicinePopup = ({ onClose, medicine }) => {
  console.log(medicine);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Popup submission logic
    onClose(); // Close popup after submission
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>Add Medicine</h2>
        <form onSubmit={handleSubmit}>
          {/* Add Medicine form fields */}
          {/* Medicine Name */}
          <div className="mb-3">
            <label htmlFor="medicineName" className="form-label">
              Medicine Name
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
            <label htmlFor="medicineName" className="form-label">
              Medicine Name
            </label>
            <textarea
              className="form-control"
              id="medicineName"
              value={medicine.description}
              name="medicineDesc"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          {/* Price Discount */}
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
            />
            <label className="form-check-label" htmlFor="inStock">
              In Stock
            </label>
          </div>
          {/* Submit Button */}
          <div className={styles.buttons}>
            <Button variant="success" className={styles.saveBtn}>
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
