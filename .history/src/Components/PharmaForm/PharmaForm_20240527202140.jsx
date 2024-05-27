import React, { useState } from "react";
import styles from "./PharmaForm.module.css";
import MedGrid from "../PMedicineGrid/MedGrid";
import AddMedicinePopup from "./AddMedicinePopup";
import { Button } from "react-bootstrap";

const medicines = [
  {
    ID: 1,
    name: "Salazodine 500mg",
    description: "Let's eat it",
    price: 100,
    discount: 11,
    InStock: true,
  },
  {
    ID: 2,
    name: "SangoBayan",
    description: "Let's eat it",
    price: 150,
    discount: 8,
    InStock: false,
  },
  {
    ID: 3,
    name: "Lerace 250mg",
    description: "Let's eat it",
    price: 200,
    discount: 5,
    InStock: true,
  },
  {
    ID: 4,
    name: "Rovista",
    description: "Let's eat it",
    price: 250,
    discount: 5,
    InStock: true,
  },
];

const PharmaForm = ({ addEditPharmacyText }) => {
  // State to store added medicines
  const [medicine, setMedicines] = useState(medicines);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    debugger;
    const newPharmacy = {
      pharmacyName: formData.get("pharmacyName"),
      medicineName: formData.get("medicineName"),
      medicineDescription: formData.get("medicineDescription"),
      discount: formData.get("discount"),
      price: formData.get("price"),
      stock: formData.get("stock"),
    };
    //setMedicines([...medicines, newMedicine]);
    e.target.reset(); // Reset the form after submission
  };

  // Function to calculate discounted price
  const calculateDiscountedPrice = (price, discount) => {
    if (discount && price) {
      const discountedPrice = price - (price * discount) / 100;
      return discountedPrice.toFixed(2);
    }
    return price;
  };

  return (
    <div className={styles.container}>
      <h1>
        {addEditPharmacyText == null || addEditPharmacyText == ""
          ? "Add a Pharmacy"
          : addEditPharmacyText}
      </h1>
      <form id="pharmacyForm" onSubmit={handleSubmit}>
        <div>
          <Button
            variant="success"
            type="submit"
            style={{ float: "left", marginBottom: "10px" }}
          >
            Save Details
          </Button>
        </div>
        <br />
        <div className={styles.form_group}>
          <label htmlFor="pharmacyName">
            Name<span>*</span>:
          </label>
          <input type="text" id="pharmacyName" name="pharmacyName" required />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="medicineName">
            Location<span>*</span>:
          </label>
          <input type="text" id="medicineName" name="medicineName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="medicineName">
            Pharmacist's Name<span>*</span>:
          </label>
          <input type="text" id="medicineName" name="medicineName" required />
        </div>

        <div className={styles.form_group}>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="fromDay">
                Operating Days (From)<span>*</span>:
              </label>
              <select
                className="form-control"
                id="fromDay"
                name="fromDay"
                required
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="fromDay">
                Operating Days (To)<span>*</span>:
              </label>
              <select className="form-control" id="toDay" name="toDay" required>
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="operatingHours">
                Operating Hours<span>*</span>:
              </label>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="time"
                    className="form-control"
                    id="startTime"
                    name="startTime"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="time"
                    className="form-control"
                    id="endTime"
                    name="endTime"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form_group}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="fromDay">
                Exclude a Day<span>*</span>:
              </label>
              <select
                className="form-control"
                id="fromDay"
                name="fromDay"
                required
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="medicineDescription">
            Additional Notes:<span>*</span>
          </label>
          <textarea
            id="medicineDescription"
            name="medicineDescription"
            required
          ></textarea>
        </div>
      </form>

      <Button variant="success" onClick={togglePopup}>
        Add Medicine
      </Button>
      {showPopup && <AddMedicinePopup onClose={togglePopup} medicine={""} />}
      <MedGrid medicines={medicine} />
    </div>
  );
};

export default PharmaForm;
