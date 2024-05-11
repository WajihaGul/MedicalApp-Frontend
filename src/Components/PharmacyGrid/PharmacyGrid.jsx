// PharmacyGrid.js
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import styles from "./PharmacyGrid.module.css"; // Import CSS module
import DeletePopup from "../DeletePopup/DeletePopup";

const PharmacyGrid = ({ pharmacies, addEditPharmacyText }) => {
  const handleEdit = (index) => {
    // Handle edit action
    console.log("Edit clicked for pharmacy at index:", index);
  };
  const [showDeletePopup, setDeletePopup] = useState(false);

  const toggleDeletePopup = () => {
    setDeletePopup(!showDeletePopup); // Toggle popup visibility
  };
  const handleDelete = (index) => {
    // Handle delete action
    toggleDeletePopup();
    console.log("Delete clicked for pharmacy at index:", index);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.addButton}>
          {/* Button to add a pharmacy */}
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
              <th>Action</th> {/* Add Action column */}
            </tr>
          </thead>
          <tbody>
            {pharmacies.map((pharmacy, index) => (
              <tr key={index}>
                <td>{pharmacy.ID}</td>
                <td>{pharmacy.name}</td>
                <td>{pharmacy.contact}</td>
                <td>{pharmacy.address}</td>
                <td>{pharmacy.hours}</td>
                <td>
                  {/* Edit button */}
                  <Link
                    Link
                    to={{
                      pathname: "/add-pharmacy",
                      state: { addEditPharmacyText: "Edit" },
                    }}
                  >
                    <Button
                      className={styles.editButton}
                      variant="primary"
                      onClick={() => handleEdit(index)}
                    >
                      <FaRegEdit className={styles.buttonIcon} />
                    </Button>
                  </Link>
                  {/* Delete button */}
                  <Button variant="danger" onClick={() => handleDelete(index)}>
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
          onDelete={handleDelete}
          text="Are you sure you want to delete this pharmacy?"
        />
      )}
    </div>
  );
};

export default PharmacyGrid;
