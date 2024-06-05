import Accomplishments from "../Components/Accomplishments/Accomplishments";
import Experience from "../Components/Experience/Experience";
import LandingPage from "./../Components/LandingPage/LandingPage";
import NavigationBar from "./../Components/NavigationBar/Navbar";
import MakeAppointment from "../Components/MakeAppointment/MakeAppointment";
import Footer from "../Components/Footer/Footer";
import Faqs from "../Components/FAQS/Faqs";

const Homepage = () => {
  return (
    <>
      <LandingPage />
      <Accomplishments />
      <Experience />
      <MakeAppointment />
      <Faqs />
    </>
  );
};

export default Homepage;
