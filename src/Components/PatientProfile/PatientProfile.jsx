import React, { useState } from "react";
import styles from "./PatientProfile.module.css";
import id from "flowbite-datepicker/locales/id";

const PatientProfile = () => {

  // State variables for form fields
  const [phone, setPhone] = useState("");
  const [dateOFBirth, setDateOFBirth] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [medicalHistory, setMedicaltHistory] = useState("");
  // const [activityLevel, setActivityLevel] = useState("");
  // const [dietaryPreference, setDietaryPreference] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    debugger;
    const newPatient = {
      image: formData.get("imageUpload"),
      name: formData.get("name"),
      dateOFBirth: formData.get("dob"),
      phone: formData.get("contactNumber"),
      bloodType: formData.get("bloodType"),
      gender: formData.get("gender"),
      dietaryPreference: formData.get("dietaryPreference"),
      activityLevel: formData.get("activityLevel"),
      medicalHistory: formData.get("patientHistory"),
    }
    try {
      const response = await fetch('http://localhost:8080/registerPatient', {
        method: 'POST',
    
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPatient),
      });

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
      // setError(error.message);
    }
  }
  return (
    <div className={styles.view_profile_container}>
      <h2>View Profile</h2>

      <div className={styles.profile_image_container}>
        <label htmlFor="imageUpload" className={styles.upload_label}>
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            name="imageUpload"
            className={styles.upload_input}
          />
          <span className={styles.upload_text}>Upload Image</span>
        </label>
      </div>

      <form className={styles.form_group} onSubmit={handleSubmit}>
      <div>
          
          </div>
        <div className={styles.form_row}>
          <label htmlFor="name" className={styles.profileLabel}>Name:</label>
          <input
            className={styles.input_field}
            type="text"
            id="name"
name="name"          />
        </div>
       
        <div className={styles.form_group}>
          <label htmlFor="contactNumber">
            Contact Number<span>*</span>:
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[\+]?[0-9\s\-]+"
            placeholder="+92 0123456789"
            required
          />
        </div>

        <div className={styles.form_row}>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            value={dateOFBirth}
            onChange={(e) => setDateOFBirth(e.target.value)}
            required
            id="dob"
            name="dob"
          />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="gender">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.form_row}>
          <label htmlFor="bloodType">Blood Type:</label>
          <select
            className={styles.select_field}
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
            name="bloodType"
            id="bloodType"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className={styles.form_row}>
          <label htmlFor="patientHistory">Medical History:</label>
          <textarea
            className={styles.textarea_field}
            value={medicalHistory}
            onChange={(e) => setMedicaltHistory(e.target.value)}
            placeholder="Write about your previous medications, medical conditions, family medical history, immunization history, mental health history"
            required id="patientHistory" name="patientHistory"
          ></textarea>
        </div>
        <div className={styles.form_row}>
          <label htmlFor="activityLevel">Activity Level:</label>
          <textarea className={styles.textarea_field} required id="activityLevel" name="activityLevel"></textarea>
        </div>
        <div className={styles.form_row}>
          <label htmlFor="dietaryPreference">Dietary Preference</label>
          <textarea className={styles.textarea_field}   ></textarea>
        </div>

        <button className={styles.submit_btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientProfile;
