import React, { useState } from "react";

const PatientProfile = () => {
  // State variables for form fields
  const [contactNumber, setContactNumber] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [surgeries, setSurgeries] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [patientHistory, setPatientHistory] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or perform necessary actions
    console.log("Form submitted");
  };

  return (
    <>
      <div>
        <h2>View Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value="John Doe" disabled />
          <br />
          <label>Email:</label>
          <input type="email" value="john@example.com" disabled />
          <br />
          <label>Contact Number:</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <br />
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
          />
          <br />
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label>Blood Type:</label>
          <select
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
          <br />
          <label>Surgeries:</label>
          <input
            type="checkbox"
            checked={surgeries}
            onChange={(e) => setSurgeries(e.target.checked)}
          />
          <br />
          <label>Smoking:</label>
          <input
            type="checkbox"
            checked={smoking}
            onChange={(e) => setSmoking(e.target.checked)}
          />
          <br />
          <label>Alcohol Use:</label>
          <input
            type="checkbox"
            checked={alcohol}
            onChange={(e) => setAlcohol(e.target.checked)}
          />
          <br />
          <label>Patient History:</label>
          <textarea
            value={patientHistory}
            onChange={(e) => setPatientHistory(e.target.value)}
            placeholder="Write about your previous medications, medical conditions, family medical history, immunization history, mental health history"
            required
          ></textarea>
          <br />
          <label>Physical Activity Level:</label>
          <input type="text" />
          <br />
          <label>Dietary Preferences/Restrictions:</label>
          <input type="text" />
          <br />
          <label>Health Goals:</label>
          <input type="text" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default PatientProfile;
