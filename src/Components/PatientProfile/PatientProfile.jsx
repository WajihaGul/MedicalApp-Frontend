// import React, { useState } from "react";
// import styles from "./PatientProfile.module.css";

// const PatientProfile = () => {
//   // State variables for form fields
//   // const [contactNumber, setContactNumber] = useState("");
//   const [phone, setPhone] = useState("");
//   // const [age, setAge] = useState("");
//   // const [dob, setDOB] = useState("");
//   const [dateOFBirth, setdateOFBirth] = useState("");
//   const [gender, setGender] = useState("");
//   const [bloodType, setBloodType] = useState("");
//   // const [surgeries, setSurgeries] = useState(false);
//   // const [smoking, setSmoking] = useState(false);
//   // const [alcohol, setAlcohol] = useState(false);
//   // const [patientHistory, setPatientHistory] = useState("");
//   const [medicalHistory, setMedicalHistory] = useState("");
//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit form data to backend or perform necessary actions
//     console.log("Form submitted");
//   };

//   return (
//     <div className={styles.view_profile_container}>
//       <h2>View Profile</h2>

//       <div className={styles.profile_image_container}>
//         <label htmlFor="imageUpload" className={styles.upload_label}>
//           <input
//             type="file"
//             accept="image/*"
//             id="imageUpload"
//             name="imageUpload"
//             className={styles.upload_input}
//           />
//           <span className={styles.upload_text}>Upload Image</span>
//         </label>
//       </div>

//       <form className={styles.form_group} onSubmit={handleSubmit}>
//         <div className={styles.form_row}>
//           <label className={styles.profileLabel}>Name:</label>
//           <input
//             className={styles.input_field}
//             type="text"
//             value="John Doe"
//             disabled
//           />
//         </div>
//         {/*<div className={styles.form_row}>
//           <label className={styles.profileLabel}>Email:</label>
//           <input
//             className={styles.input_field}
//             type="email"
//             value=" "
//             disabled
//           />
//         </div>*/}
//         <div className={styles.form_group}>
//           <label htmlFor="phone">
//             Contact Number<span>*</span>:
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             pattern="[\+]?[0-9\s\-]+" // Updated pattern
//             placeholder="+92 0123456789" // Example placeholder
//             required
//           />
//         </div>

//         <div className={styles.form_row}>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             value={dateOFBirth}
//             onChange={(e) => setdateOFBirth(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.form_row}>
//           <label>Gender:</label>
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div className={styles.form_row}>
//           <label>Blood Type:</label>
//           <select
//             className={styles.select_field}
//             value={bloodType}
//             onChange={(e) => setBloodType(e.target.value)}
//             required
//           >
//             <option value="">Select Blood Type</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>
//         </div>
//         {/* <div className={styles.form_row}>
//           <label>Surgeries:</label>
//           <input
//             type="checkbox"
//             checked={surgeries}
//             onChange={(e) => setSurgeries(e.target.checked)}
//           />
//         </div>
//         <div className={styles.form_row}>
//           <label>Smoking:</label>
//           <input
//             type="checkbox"
//             checked={smoking}
//             onChange={(e) => setSmoking(e.target.checked)}
//           />
//         </div>
//         <div className={styles.form_row}>
//           <label className={styles.checkbox_label}>Alcohol Use:</label>
//           <input
//             type="checkbox"
//             checked={alcohol}
//             onChange={(e) => setAlcohol(e.target.checked)}
//           />
//         </div> */}
//         <div className={styles.form_row}>
//           <label>Medical History:</label>
//           <textarea
//             className={styles.textarea_field}
//             value={medicalHistory}
//             onChange={(e) => setMedicalHistory(e.target.value)}
//             placeholder="Write about your previous medications, medical conditions, family medical history, immunization history, mental health history"
//             required
//           ></textarea>
//         </div>
//         <div className={styles.form_row}>
//           <label>Activity Level:</label>
//           <textarea
//             className={styles.textarea_field}
//             placeholder="Describe your physical activity level, e.g., sedentary, moderately active, very active"
//             required
//           ></textarea>
//         </div>

//         <div className={styles.form_row}>
//           <label>Dietary Preference:</label>
//           <textarea
//             className={styles.textarea_field}
//             placeholder="Describe your dietary preferences, e.g., vegetarian, vegan, gluten-free, and mention any food allergies"
//             required
//           ></textarea>
//         </div>
//         {/* <div className={styles.form_row}>
//           <label>Health Goals</label>
//           <textarea className={styles.textarea_field} required></textarea>
//         </div> */}
//         <button className={styles.submit_btn} type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PatientProfile;

// ///AFTER API
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
      phone: formData.get("phone"),
      bloodType: formData.get("bloodType"),
      gender: gender,
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
          <label htmlFor="phone">
            Contact Number<span>*</span>:
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[\+]?[0-9\s\-]+"
            placeholder="3244201338"
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
