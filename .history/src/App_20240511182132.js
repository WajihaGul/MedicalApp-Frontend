import "./App.css";
import Homepage from "./Pages/Homepage";
import Pharmacy from "./Pages/Pharmacy";
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AddPharmacy from "./Pages/AddPharmacy";
import EditPharmacy from "./Pages/EditPharmacy";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/add-pharmacy" element={<AddPharmacy />} />
          <Route exact path="/pharmacy" element={<Pharmacy />} />
          <Route exact path="/edit-pharmacy" element={<EditPharmacy />} />
          <Route exact path="/search-medicine" element={<EditPharmacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
