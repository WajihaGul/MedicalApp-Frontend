// import React from "react";
// import styles from "./DeletePopup.module.css";
// import { Button } from "react-bootstrap";

// const DeletePopup = ({ onClose, onDelete, text }) => {
//   return (
//     <div className={styles.popup}>
//       <div className={styles.popupContent}>
//         <h4>Delete Confirmation</h4>
//         <p>{text}</p>
//         {/* Delete and Cancel Buttons */}
//         <div className={styles.buttons}>
//           <Button
//             variant="danger"
//             className={styles.deleteBtn}
//             onClick={onDelete}
//           >
//             Delete
//           </Button>
//           <Button
//             variant="secondary"
//             className={styles.cancelBtn}
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeletePopup;

import React from "react";
import axios from "axios";
import styles from "./DeletePopup.module.css";
import { Button } from "react-bootstrap";

const DeletePopup = ({ onClose, onDelete, text, itemId }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://<backend-ip>:<backend-port>/api/delete/${itemId}`
      );
      console.log(response.data);
      onDelete();
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h4>Delete Confirmation</h4>
        <p>{text}</p>
        <div className={styles.buttons}>
          <Button
            variant="danger"
            className={styles.deleteBtn}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            className={styles.cancelBtn}
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
