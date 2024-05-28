import Appointment from "./Components/Appointment/Appointment";
import Doctor from "./Components/Doctor/Doctor"
import Chat from "./Components/Chat.js";
import SignIn from "./Components/SignIn.js";
import Contact from "./Pages/Contact";
import { auth } from './Firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <Contact/>
      <Appointment/>
      <Doctor/>
      {user ? <Chat /> : <SignIn />}

    </div>

  
       
  );
}

export default App;
