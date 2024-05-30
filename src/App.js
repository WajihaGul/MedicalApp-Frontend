import Appointment from "./Components/Appointment/Appointment";
import Doctor from "./Components/Doctor/Doctor"
import Contact from "./Pages/Contact";
import ChatApp from './Components/ChatApp';
import 'bootstrap/dist/css/bootstrap.min.css';
{/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';*/}
function App() {
  return (
    <div>
     {/* <Router>
        <Routes>
      <Route path="chat" component={} />
      </Routes>
  </Router>*/}
      <Contact/>
      <Appointment/>
      <Doctor/>
      <ChatApp/>
    </div>     
  );
}

export default App;
