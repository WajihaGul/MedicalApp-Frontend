import "./App.css";
import Homepage from "./Pages/Homepage";
import Pharmacy from "./Pages/Pharmacy";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AddPharmacy from "./Pages/AddPharmacy";
import EditPharmacy from "./Pages/EditPharmacy";
import SearchMedicine from "./Pages/SearchMedicine";
import ViewPatientProfile from "./Pages/ViewPatientProfile";
import ViewDoctorProfile from "./Pages/ViewDoctorProfile";
import "./App.css";
import DoctorSearch from "./Components/Search/DoctorSearch";
import DoctorData from "./Components/DoctorData/DoctorData";
import Contact from "./Components/Contact/contact";
import Appointment from "./Components/Appointment/Appointment";
import ManagePrescription from "./Pages/ManagePrescription";
import ChatComponent from "./Components/Chat/ChatComponent";
import Doctor from "./Components/Doctor/Doctor";
import Doc1 from "./Assets/img/doc1.jpg";
import Doc2 from "./Assets/img/doc2.jpg";
import Doc3 from "./Assets/img/doc3.jpg";
import Doc4 from "./Assets/img/doc4.jpg";
import Doc5 from "./Assets/img/doc5.jpg";
import Doc6 from "./Assets/img/doc6.jpg";

function App() {
  const doctors = [
    {
      id: 1,
      imageUpload: Doc1,
      fullName: "Dr. Serena Mitchell",
      specialization: "Orthopedic Surgeon",
    },
    {
      id: 2,
      imageUpload: Doc2,
      fullName: "Dr. Julian Bennett",
      specialization: "Cardiologist",
    },
    {
      id: 3,
      imageUpload: Doc3,
      fullName: "Dr. Camila Rodriguez",
      specialization: "Pediatrician",
    },
    {
      id: 4,
      imageUpload: Doc4,
      fullName: "Dr. Victor Nguyen",
      specialization: "Neurologist",
    },
    {
      id: 5,
      imageUpload: Doc5,
      fullName: "Dr. Ethan Carter",
      specialization: "Dermatology",
    },
    {
      id: 6,
      imageUpload: Doc6,
      fullName: "Dr. Olivia Martinez",
      specialization: "Ophthalmologist",
    },
  ];
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/view-patient-profile"
            element={<ViewPatientProfile />}
          />
          <Route exact path="/add-pharmacy" element={<AddPharmacy />} />
          <Route
            exact
            path="/ViewPatientProfile"
            element={<ViewPatientProfile />}
          />
          {/* <Route exact path="/ViewPatientProfile" element={<ViewPProfile />} /> */}
          <Route
            exact
            path="/ViewDoctorProfile"
            element={<ViewDoctorProfile />}
          />
          <Route exact path="/chatComponent" element={<ChatComponent />} />
          <Route exact path="/pharmacy" element={<Pharmacy />} />
          <Route exact path="/edit-pharmacy" element={<EditPharmacy />} />
          <Route exact path="/search-medicine" element={<SearchMedicine />} />
          <Route path="/doctors" element={<Doctor doctors={doctors} />} />

          <Route
            path="/doctors/:doctorId/book"
            element={<Appointment doctors={doctors} />}
          />
          <Route path="/upload-prescription" element={<ManagePrescription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctors" element={<DoctorSearch backendUrl="http://localhost:8080" />} />
          <Route
            path="/doctors/:doctorId"
            element={<DoctorData doctors={doctors} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
