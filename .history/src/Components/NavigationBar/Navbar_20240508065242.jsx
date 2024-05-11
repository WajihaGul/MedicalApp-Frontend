import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img
          className={styles.nav_img}
          src="https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png"
          alt="logo"
        />
        <h1 className={styles.nav_head}>HealthBuddy</h1>
      </div>
      <ul className={styles.navul}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Doctors</a>
        </li>
        <li>
          <a href="#">Pharmacies</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
