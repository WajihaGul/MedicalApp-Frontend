import React, { useState } from "react";
import Popup from "./Popup";
import styles from "./ProfileForm.module.css"; // Import your CSS module

function ProfileForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [apiResponse, setApiResponse] = useState({ success: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    // Replace this with an actual API call
    fetch("/api/profile/update", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
        setShowPopup(true);
      })
      .catch((error) => {
        setApiResponse({ success: false });
        setShowPopup(true);
      });
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" required />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" required />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showPopup && <Popup apiResponse={apiResponse} onClose={handleClose} />}
    </div>
  );
}

export default ProfileForm;
