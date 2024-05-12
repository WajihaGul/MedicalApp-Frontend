import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import 'flowbite-datepicker';
import 'flowbite/dist/datepicker.turbo.js';
import Contact from './Components/Contact/contact'
import Doctor from './Components/Doctor/Doctor'
import Appointment from './Components/Appointment/Appointment';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    /*<Router>
      <Routes>
      <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/appointment" element={<Appointment />} />
        </Routes>
     </Router>*/
     <>
     <Contact/>
     <Doctor/>
     </>
  )
}

export default App
