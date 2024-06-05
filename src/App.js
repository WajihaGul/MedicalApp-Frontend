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
import "./App.css";
import DoctorData from './Components/DoctorData/DoctorData';
import Contact from "./Components/Contact/contact";
import Appointment from "./Components/Appointment/Appointment";
import ManagePrescription from "./Pages/ManagePrescription";
import ChatComponent from "./Components/Chat/ChatComponent";
import Doctor from "./Components/Doctor/Doctor";

function App() {
  const doctors = [
    { id: 1, name: 'Dr. Serena Mitchell', specialties: 'Orthopedic Surgeon' },
    { id: 2, name: 'Dr. Julian Bennett', specialties: 'Cardiologist' },
    { id: 3, name: 'Dr. Camila Rodriguez', specialties: 'Pediatrician' },
    { id: 4, name: 'Dr. Victor Nguyen', specialties: 'Neurologist' },
    { id: 5, name: 'Dr. Ethan Carter', specialties: 'Dermatology' },
    { id: 6, name: 'Dr. Olivia Martinez', specialties: 'Ophthalmologist' },
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
          <Route exact path="/ViewPatientProfile" element={<ViewPatientProfile />} />
          <Route exact path="/pharmacy" element={<Pharmacy />} />
          <Route exact path="/edit-pharmacy" element={<EditPharmacy />} />
          <Route exact path="/search-medicine" element={<SearchMedicine />} />
          <Route path="/doctors" element={<Doctor doctors={doctors} />} />
          <Route path="/doctor/:id" element={<DoctorData doctors={doctors} />} />
        <Route path="/doctor/:doctorId/book" element={<Appointment doctors={doctors} />} />
          <Route path="/upload-prescription" element={<ManagePrescription />} />
         <Route path="/contact" element={<Contact />} /> 
          <Route path="/appointment" element={<Appointment />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
