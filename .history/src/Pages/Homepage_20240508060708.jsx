import Accomplishments from "../Components/Accomplishments/Accomplishments";
import Experience from "../Components/Experience/Experience";
import LandingPage from "./../Components/LandingPage/LandingPage";
import NavigationBar from "./../Components/NavigationBar/Navbar";
import MakeAppointment from "../Components/MakeAppointment/MakeAppointment";
import Departments from "../Components/Departments/Departments";
import Footer from "../Components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <LandingPage />
      <Accomplishments />
      <Experience />
      <MakeAppointment />
      <Faqs />
      <Footer />
    </>
  );
};

export default Homepage;
