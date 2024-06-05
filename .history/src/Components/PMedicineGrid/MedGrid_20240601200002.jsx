import styles from "./MedGrid.module.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import AddMedicinePopup from "../PharmaForm/AddMedicinePopup";
import DeletePopup from "../DeletePopup/DeletePopup";
//import styles from "../PharmacyGrid/PharmacyGrid.module.css"; // Import CSS module

const MedGrid = ({ medicines }) => {
  const handleEdit = (index) => {
    // Handle edit action
    togglePopup();
    const medicine = medicines.find((x) => x.ID == index);
    setMedicine(medicine);
    console.log("Edit clicked for pharmacy at index:", index);
  };
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [showDeletePopup, setDeletePopup] = useState(false);
  const [medicine, setMedicine] = useState();
  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };
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
        <Table striped bordered hover className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Discounted Price</th>
              <th>In-Stock</th>
              <th>Action</th>
              {/* Add Action column */}
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.id}</td>
                <td>{medicine.name}</td>
                <td>{medicine.description}</td>
                <td>{medicine.price}</td>
                <td>{medicine.discount}</td>
                <td>{medicine.discountedPrice}</td>
                <td>
                  {/* Display a checkbox checked if InStock is true */}
                  <input type="checkbox" checked={medicine.InStock} readOnly />
                </td>

                <td>
                  {/* Edit button */}
                  <Button
                    className={styles.editButton}
                    variant="primary"
                    onClick={() => handleEdit(medicine.ID)}
                  >
                    <FaRegEdit className={styles.buttonIcon} />
                  </Button>
                  {/* Delete button */}
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    <MdDelete className={styles.buttonIcon} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {showPopup && (
          <AddMedicinePopup onClose={togglePopup} medicine={medicine} />
        )}
        {showDeletePopup && (
          <DeletePopup
            onClose={toggleDeletePopup}
            onDelete={handleDelete}
            text="Are you sure you want to delete this medicine?"
          />
        )}
      </div>
    </div>
  );
};

export default MedGrid;

// import styles from "./MedGrid.module.css";
// import { FaRegEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import React, { useState, useEffect } from "react";
// import { Table, Button } from "react-bootstrap";
// import AddMedicinePopup from "../PharmaForm/AddMedicinePopup";
// import DeletePopup from "../DeletePopup/DeletePopup";
// // import { getMedicines, updateMedicine, deleteMedicine } from "../api";

// const MedGrid = () => {
//   const [medicines, setMedicines] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showDeletePopup, setDeletePopup] = useState(false);
//   const [medicine, setMedicine] = useState();

//   useEffect(() => {
//     fetchMedicines();
//   }, []);

//   const fetchMedicines = async () => {
//     try {
//       const response = await getMedicines();
//       setMedicines(response.data);
//     } catch (error) {
//       console.error("Error fetching medicines:", error);
//     }
//   };

//   const handleEdit = (id) => {
//     const selectedMedicine = medicines.find((med) => med.id === id);
//     setMedicine(selectedMedicine);
//     togglePopup();
//   };

//   const handleUpdate = async (updatedMedicine) => {
//     try {
//       await updateMedicine(updatedMedicine);
//       fetchMedicines();
//       togglePopup();
//     } catch (error) {
//       console.error("Error updating medicine:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteMedicine(id);
//       fetchMedicines();
//       toggleDeletePopup();
//     } catch (error) {
//       console.error("Error deleting medicine:", error);
//     }
//   };

//   const togglePopup = () => setShowPopup(!showPopup);
//   const toggleDeletePopup = () => setDeletePopup(!showDeletePopup);

//   return (
//     <div className={styles.tableContainer}>
//       <div className={styles.gridContainer}>
//         <Table striped bordered hover className={styles.table}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Discount</th>
//               <th>Discounted Price</th>
//               <th>In-Stock</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {medicines.map((medicine, index) => (
//               <tr key={index}>
//                 <td>{medicine.id}</td>
//                 <td>{medicine.name}</td>
//                 <td>{medicine.description}</td>
//                 <td>{medicine.price}</td>
//                 <td>{medicine.discount}</td>
//                 <td>{medicine.discountedPrice}</td>
//                 <td>
//                   <input type="checkbox" checked={medicine.inStock} readOnly />
//                 </td>
//                 <td>
//                   <Button
//                     className={styles.editButton}
//                     variant="primary"
//                     onClick={() => handleEdit(medicine.id)}
//                   >
//                     <FaRegEdit className={styles.buttonIcon} />
//                   </Button>
//                   <Button
//                     variant="danger"
//                     onClick={() => handleDelete(medicine.id)}
//                   >
//                     <MdDelete className={styles.buttonIcon} />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         {showPopup && (
//           <AddMedicinePopup
//             onClose={togglePopup}
//             medicine={medicine}
//             onSave={handleUpdate}
//           />
//         )}
//         {showDeletePopup && (
//           <DeletePopup
//             onClose={toggleDeletePopup}
//             onDelete={() => handleDelete(medicine.id)}
//             text="Are you sure you want to delete this medicine?"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default MedGrid;
