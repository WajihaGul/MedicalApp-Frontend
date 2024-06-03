
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import styles from "./PharmacyGrid.module.css";
import DeletePopup from "../DeletePopup/DeletePopup";
import axios from "axios"; // Import Axios for making HTTP requests

const PharmacyGrid = ({ pharmacies, addEditPharmacyText }) => {
  const [showDeletePopup, setDeletePopup] = useState(false);
  const [selectedPharmacyIndex, setSelectedPharmacyIndex] = useState(null);
  const [pharmacyList, setPharmacies] = useState(pharmacies);
  useEffect(() => {
    const fetchPharmacies = async () => {

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
        console.log("Success:", data);
      } catch (error) {
        console.error("Error:", error);
        // setError(error.message);
      }
    };

    fetchPharmacies();
  }, []);

  const toggleDeletePopup = () => {
    setDeletePopup(!showDeletePopup);
  };

  const handleDelete = async (index) => {
    debugger;
    setSelectedPharmacyIndex(index);
    toggleDeletePopup();
  };
  const confirmDelete = async () => {
    try {
      debugger
      const response = await fetch(
        `http://localhost:8080/pharmacy/deletePharmacy/${selectedPharmacyIndex}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Removing the deleted pharmacy from the list
      setPharmacies(
        pharmacyList.filter((_, idx) => idx !== selectedPharmacyIndex)
      );
      console.log("Delete response:", await response.json());
    } catch (error) {
      console.error("Error deleting pharmacy:", error);
    } finally {
      setSelectedPharmacyIndex(null);
      toggleDeletePopup();
    }
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.addButton}>
          <Link to="/add-pharmacy">
            <Button variant="success">
              {addEditPharmacyText == null || addEditPharmacyText == ""
                ? "Add a Pharmacy"
                : addEditPharmacyText}
            </Button>
          </Link>
        </div>
        <Table striped bordered hover className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Operating Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pharmacyList.map((pharmacy, index) => (
              <tr key={index}>
                <td>{pharmacy.id}</td>
                <td>{pharmacy.name}</td>
                <td>{pharmacy.contactNumber}</td>
                <td>{pharmacy.location}</td>
                <td>{pharmacy.operatingStartTime} - {pharmacy.operatingEndTime}</td>
                <td>
                  <Link to={`/edit-pharmacy?index=${pharmacy.id}`}>
                    <Button className={styles.editButton} variant="primary">
                      <FaRegEdit className={styles.buttonIcon} />
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(pharmacy.id)}
                  >
                    <MdDelete className={styles.buttonIcon} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showDeletePopup && (
        <DeletePopup
          onClose={toggleDeletePopup}
          onDelete={confirmDelete}
          text="Are you sure you want to delete this pharmacy?"
        />
      )}
    </div>
  );
};

export default PharmacyGrid;
