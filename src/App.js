import "./App.css";
import Homepage from "./Pages/Homepage";
import Pharmacy from "./Pages/Pharmacy";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AddPharmacy from "./Pages/AddPharmacy";
import EditPharmacy from "./Pages/EditPharmacy";
import SearchMedicine from "./Pages/SearchMedicine";
import ViewPatientProfile from "./Pages/ViewPatientProfile";
import "./App.css";
import Contact from "./Components/Contact/contact";
import Doctor from "./Components/Doctor/Doctor";
import Appointment from "./Components/Appointment/Appointment";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/" element={<ViewPatientProfile />} />
          <Route exact path="/add-pharmacy" element={<AddPharmacy />} />
          <Route exact path="/pharmacy" element={<Pharmacy />} />
          <Route exact path="/edit-pharmacy" element={<EditPharmacy />} />
          <Route exact path="/search-medicine" element={<SearchMedicine />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/doctor" element={<Doctor />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/doctor" element={<Doctor />} /> */}
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
