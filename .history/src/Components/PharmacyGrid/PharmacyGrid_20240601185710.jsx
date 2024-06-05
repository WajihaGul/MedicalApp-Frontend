// // PharmacyGrid.js
// import { FaRegEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Table, Button } from "react-bootstrap";
// import styles from "./PharmacyGrid.module.css"; // Import CSS module
// import DeletePopup from "../DeletePopup/DeletePopup";

// const PharmacyGrid = ({ pharmacies, addEditPharmacyText }) => {
//   const handleEdit = (index) => {
//     // Handle edit action
//     console.log("Edit clicked for pharmacy at index:", index);
//   };
//   const [showDeletePopup, setDeletePopup] = useState(false);

//   const toggleDeletePopup = () => {
//     setDeletePopup(!showDeletePopup); // Toggle popup visibility
//   };
//   const handleDelete = (index) => {
//     // Handle delete action
//     toggleDeletePopup();
//     console.log("Delete clicked for pharmacy at index:", index);
//   };

//   return (
//     <div className={styles.tableContainer}>
//       <div className={styles.gridContainer}>
//         <div className={styles.addButton}>
//           {/* Button to add a pharmacy */}
//           <Link to="/add-pharmacy">
//             <Button variant="success">
//               {addEditPharmacyText == null || addEditPharmacyText == ""
//                 ? "Add a Pharmacy"
//                 : addEditPharmacyText}
//             </Button>
//           </Link>
//         </div>
//         <Table striped bordered hover className={styles.table}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Contact</th>
//               <th>Address</th>
//               <th>Operating Hours</th>
//               <th>Action</th> {/* Add Action column */}
//             </tr>
//           </thead>
//           <tbody>
//             {pharmacies.map((pharmacy, index) => (
//               <tr key={index}>
//                 <td>{pharmacy.ID}</td>
//                 <td>{pharmacy.name}</td>
//                 <td>{pharmacy.contact}</td>
//                 <td>{pharmacy.address}</td>
//                 <td>{pharmacy.hours}</td>
//                 <td>
//                   {/* Edit button */}
//                   {/* <Link to="/edit-pharmacy">
//                     <Button
//                       className={styles.editButton}
//                       variant="primary"
//                       onClick={() => handleEdit(index)}
//                     >
//                       <FaRegEdit className={styles.buttonIcon} />
//                     </Button>
//                   </Link> */}
//                   <Link to={`/edit-pharmacy?index=${pharmacy.ID}`}>
//                     <Button className={styles.editButton} variant="primary">
//                       <FaRegEdit className={styles.buttonIcon} />
//                     </Button>
//                   </Link>
//                   {/* Delete button */}
//                   <Button variant="danger" onClick={() => handleDelete(index)}>
//                     <MdDelete className={styles.buttonIcon} />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       {showDeletePopup && (
//         <DeletePopup
//           onClose={toggleDeletePopup}
//           onDelete={handleDelete}
//           text="Are you sure you want to delete this pharmacy?"
//         />
//       )}
//     </div>
//   );
// };

// export default PharmacyGrid;

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

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/pharmacy/register",
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
        setPharmacies(response.data);
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
    setSelectedPharmacyIndex(index);
    toggleDeletePopup();
  };
  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/pharmacy/register/${selectedPharmacyIndex}`,
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
        pharmacies.filter((_, idx) => idx !== selectedPharmacyIndex)
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
            {pharmacies.map((pharmacy, index) => (
              <tr key={index}>
                <td>{pharmacy.ID}</td>
                <td>{pharmacy.name}</td>
                <td>{pharmacy.contact}</td>
                <td>{pharmacy.address}</td>
                <td>{pharmacy.hours}</td>
                <td>
                  <Link to={`/edit-pharmacy?index=${pharmacy.ID}`}>
                    <Button className={styles.editButton} variant="primary">
                      <FaRegEdit className={styles.buttonIcon} />
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(pharmacy.ID)}
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
