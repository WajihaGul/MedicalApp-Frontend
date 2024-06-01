import React, { useState } from "react";
import styles from "./PatientProfile.module.css";

const PatientProfile = () => {
  // State variables for form fields
  // const [contactNumber, setContactNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [, setAge] = useState("");
  // const [dob, setDOB] = useState("");
  const [dateOFBirth, setdateOFBirth] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  // const [surgeries, setSurgeries] = useState(false);
  // const [smoking, setSmoking] = useState(false);
  // const [alcohol, setAlcohol] = useState(false);
  // const [patientHistory, setPatientHistory] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or perform necessary actions
    console.log("Form submitted");
  };

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
        <div className={styles.form_row}>
          <label className={styles.profileLabel}>Name:</label>
          <input
            className={styles.input_field}
            type="text"
            value="John Doe"
            disabled
          />
          {/*</div>
         <div className={styles.form_row}>
          <label className={styles.profileLabel}>Email:</label>
          <input
            className={styles.input_field}
            type="email"
            value=" "
            disabled
          /> 
        </div>*/}
        <div className={styles.form_group}>
          <label htmlFor="phone">
            Contact Number<span>*</span>:
          </label>
          <input
            type="tel"
            //id="contactNumber"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"// HAVE A LOOK
            required
          />
        </div>

        <div className={styles.form_row}>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_row}>
          <label>Gender:</label>
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
          <label>Blood Type:</label>
          <select
            className={styles.select_field}
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
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
        {/* <div className={styles.form_row}>
          <label>Surgeries:</label>
          <input
            type="checkbox"
            checked={surgeries}
            onChange={(e) => setSurgeries(e.target.checked)}
          />
        </div>
        <div className={styles.form_row}>
          <label>Smoking:</label>
          <input
            type="checkbox"
            checked={smoking}
            onChange={(e) => setSmoking(e.target.checked)}
          />
        </div>
        <div className={styles.form_row}>
          <label className={styles.checkbox_label}>Alcohol Use:</label>
          <input
            type="checkbox"
            checked={alcohol}
            onChange={(e) => setAlcohol(e.target.checked)}
          />
        </div> */}
        <div className={styles.form_row}>
          <label>Medical History:</label>
          <textarea
            className={styles.textarea_field}
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            placeholder="Write about your previous medications, medical conditions, family medical history, immunization history, mental health history"
            required
          ></textarea>
        </div>
        <div className={styles.form_row}>
          <label>Activity Level:</label>
          <textarea className={styles.textarea_field} required></textarea>
        </div>
        <div className={styles.form_row}>
          <label>Dietary Preference</label>
          <textarea className={styles.textarea_field} required></textarea>
        </div>
        {/* <div className={styles.form_row}>
          <label>Health Goals</label>
          <textarea className={styles.textarea_field} required></textarea>
        </div> */}
        <button className={styles.submit_btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientProfile;
