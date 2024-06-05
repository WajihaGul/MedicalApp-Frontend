import styles from "./Navbar.module.css";
import { TbPhoneCall } from "react-icons/tb";
import navlogo from "../../../images/navlogo.png";
const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className="logo">
          <img src={navlogo} alt="logo" />
          HealthBuddy
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Doctors</li>
          <li href="#">Pharmacies</li>
          <li href="#">About Us</li>
        </ul>

        <button type="button" className=" btn btn-primary btn-lg">
          <TbPhoneCall className="icon" /> Contact Us
        </button>
      </nav>
    </>
  );
};

export default Navbar;
