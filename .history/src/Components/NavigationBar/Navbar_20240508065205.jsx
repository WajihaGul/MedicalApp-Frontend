import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img
          className={styles.nav_img}
          src="https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png"
          alt="logo"
        />
        <h1 className={styles.nav_head}>HealthBuddy</h1>
      </Link>
      <ul className={styles.navul}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/pharmacies">Pharmacies</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      {isAuthenticated ? (
        <button
          className={styles.customButton}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      ) : (
        <button
          className={styles.customButton}
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
