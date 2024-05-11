import Accomplishments from "../Components/Accomplishments/Accomplishments";
import Experience from "../Components/Experience/Experience";
import LandingPage from "./../Components/LandingPage/LandingPage";
import NavigationBar from "./../Components/NavigationBar/Navbar";
import Spacing from "../Components/Spacing/Spacing";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <LandingPage />
      <Accomplishments />
      <Spacing />
      {/* <Experience /> */}
    </>
  );
};

export default Homepage;
