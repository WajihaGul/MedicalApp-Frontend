import Accomplishments from "../Components/Accomplishments/Accomplishments";
import Experience from "../Components/Experience/Experience";
import LandingPage from "./../Components/LandingPage/LandingPage";
import NavigationBar from "./../Components/NavigationBar/Navbar";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <LandingPage />
      <Accomplishments />
      <Experience />
    </>
  );
};

export default Homepage;
