import Accomplishments from "../Components/Accomplishments/Accomplishments";
import Experience from "../Components/Experience/Experience";
import LandingPage from "./../Components/LandingPage/LandingPage";
import NavigationBar from "./../Components/NavigationBar/Navbar";
import MakeAppointment from "../Components/MakeAppointment/MakeAppointment";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <LandingPage />
      <MakeAppointment />
    </>
  );
};

export default Homepage;
