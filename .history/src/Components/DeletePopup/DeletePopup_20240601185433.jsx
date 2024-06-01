import React from "react";
import styles from "./DeletePopup.module.css";
import { Button } from "react-bootstrap";

const DeletePopup = ({ onClose, onDelete, text }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h4>Delete Confirmation</h4>
        <p>{text}</p>
        {/* Delete and Cancel Buttons */}
        <div className={styles.buttons}>
          <Button
            variant="danger"
            className={styles.deleteBtn}
            onClick={onDelete}
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
