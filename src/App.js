import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from "./Components/Appointment/Appointment";
import Doctor from "./Components/Doctor/Doctor"
import Contact from "./Components/Contact/Contact";
import ChatComponent from "./Components/Chat/ChatComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import DoctorData from './Components/DoctorData/DoctorData';
function App() {
  const doctors = [
    { id: 1, name: 'Dr. Serena Mitchell', specialties: 'Orthopedic Surgeon' },
    { id: 2, name: 'Dr. Julian Bennett', specialties: 'Cardiologist' },
    { id: 3, name: 'Dr. Camila Rodriguez', specialties: 'Pediatrician' },
    { id: 4, name: 'Dr. Victor Nguyen', specialties: 'Neurologist' },
    { id: 5, name: 'Dr. Ethan Carter', specialties: 'Dermatology' },
    { id: 6, name: 'Dr. Olivia Martinez', specialties: 'Ophthalmologist' },
  ];
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
     <Router>
      <Contact/>
      <Routes>
        <Route path="/" element={<Doctor doctors={doctors} />} />
        <Route path="/doctor/:id" element={<DoctorData doctors={doctors} />} />
        <Route path="/doctor/:doctorId/book" element={<Appointment doctors={doctors} />} />
      </Routes>
      <button onClick={toggleChat} className='chat-button'>Chat With Me</button> {/* Button to open chat */}
      {isChatOpen && <ChatComponent />} {/* Render chat component if open */}
  </Router>
    </div>     
  );
}

export default App;
