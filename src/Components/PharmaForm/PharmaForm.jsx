import React, { useState, useEffect } from "react";
import styles from "./PharmaForm.module.css";
import MedGrid from "../PMedicineGrid/MedGrid";
import AddMedicinePopup from "./AddMedicinePopup";
import { Button } from "react-bootstrap";
import axios from "axios";
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

const PharmaForm = ({ addEditPharmacyText, id }) => {
  // State to store added medicines
  const [medicine, setMedicine] = useState(medicines);
  const [newMedicine, setNewMedicine] = useState();
  const [pharmacy, setPharmacy] = useState();
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };
  useEffect(() => {
    const fetchPharmacies = async () => {
      debugger;
      try {
        if (id) {
          const response = await fetch(
            `http://localhost:8080/pharmacy/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          setPharmacy(data);
          console.log("Success:", data);
          const responseForMedicine = await fetch(
            `http://localhost:8080/medicine/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const medicineData = await responseForMedicine.json();
          //setMedicine(medicineData);
          console.log("Success:", data);
        } 
        
      } catch (error) {
        console.error("Error fetching pharmacies:", error);
      }
    };

    fetchPharmacies();
  }, [id]);
  const addNewMedicine = (medicine) => {
    setNewMedicine(medicine);
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
debugger
    const newPharmacy = {
      name: formData.get("pharmacyName"),
      location: formData.get("location"),
      contactNumber: formData.get("contactNumber"),
      pharmacistName: formData.get("pharmacistName"),
      additionalNote: formData.get("additionalNote"),
      excludedDay: formData.get("excludedDay"),
      operatingStartTime: formData.get("startTime"),
      operatingEndTime: formData.get("endTime"),
      workEndDay: formData.get("toDay"),
      workStartDay: formData.get("fromDay"), 
      medicines: newMedicine
    }
    try {
      let response;
      if (id > 0) {
        response = await fetch(
          `http://localhost:8080/pharmacy/updatePharmacy/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPharmacy),
          }
        );
      } else {
        response = await fetch("http://localhost:8080/pharmacy/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPharmacy),
        });
      }
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
      // setError(error.message);
    }
  };

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
            style={{ float: "right", marginBottom: "10px" }}
          >
            Save Details
          </Button>
        </div>
        <br /> <br />
        <div className={styles.form_group}>
          <label htmlFor="pharmacyName">
            Name<span>*</span>:
          </label>
          <input type="text" id="pharmacyName" value={pharmacy?.name} name="pharmacyName" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="location">
            Location<span>*</span>:
          </label>
          <input type="text" id="location" value={pharmacy?.location} name="location" required />
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
            value={pharmacy?.contactNumber}
            //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="pharmacistName">
            Pharmacist's Name<span>*</span>:
          </label>
          <input
            type="text"
            id="pharmacistName"
            name="pharmacistName"
            required
            value={pharmacy?.pharmacistName}
          />
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
                value={pharmacy?.workEndDay}
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
              <label htmlFor="toDay">
                Operating Days (To)<span>*</span>:
              </label>
              <select className="form-control" id="toDay" name="toDay" required value={pharmacy?.workStartDay}>
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
                    value={pharmacy?.operatingStartTime}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="time"
                    className="form-control"
                    id="endTime"
                    name="endTime"
                    required
                    value={pharmacy?.operatingEndTime}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form_group}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="excludedDay">Exclude a Day:</label>
              <select
                className="form-control"
                id="excludedDay"
                name="excludedDay"
                required
                value={pharmacy?.excludedDay}
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
          <label htmlFor="additionalNote">
            Additional Notes:<span>*</span>
          </label>
          <textarea
            id="additionalNote"
            name="additionalNote"
            required
            value={pharmacy?.additionalNote}
          ></textarea>
        </div>
      </form>

      <Button variant="success" onClick={togglePopup}>
        Add Medicine
      </Button>
      {showPopup && (
        <AddMedicinePopup
          onClose={togglePopup}
          medicine={""}
          addMedicine={addNewMedicine}
        />
      )}
      <MedGrid medicines={medicine} />
    </div>
  );
};

export default PharmaForm;
