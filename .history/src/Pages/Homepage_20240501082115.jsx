import Experience from "../Components/Experience/Experience";
import LandingPage from "./../Components/LandingPage/LandingPage";
import NavigationBar from "./../Components/NavigationBar/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Experience />
    </>
  );
};

export default Homepage;
