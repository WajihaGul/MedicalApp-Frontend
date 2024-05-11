import styles from "./Navbar.module.css";
import { TbPhoneCall } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <img
            className={styles.nav_img}
            src="https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png"
            alt="logo"
          />
          <h1 className={styles.nav_head}>HealthBuddy</h1>
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Doctors</li>
          <li href="#">Pharmacies</li>
          <li href="#">About Us</li>
        </ul>

        <button type="button" className={styles.btn btn-primary btn-lg}>
          <TbPhoneCall className={styles.icon} /> Contact Us
        </button>
      </nav>
    </>
  );
};

export default Navbar;
