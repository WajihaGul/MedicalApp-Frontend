import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  return (
    <>
    const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
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
          <li href="#">Contact Us</li>
        </ul>

        <button className={styles.customButton}>Login</button>
      </nav>
    </>
  );
};

export default Navbar;