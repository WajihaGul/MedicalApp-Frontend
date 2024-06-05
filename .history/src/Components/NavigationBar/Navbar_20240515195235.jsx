import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
        <div className={styles.navLinks}>
          <Link className={styles.navLinksColor} to="/">
            Home
          </Link>
          {/* <Link to="/add-doctor">Doctors</Link> */}
          <Link className={styles.navLinksColor} to="/pharmacy">
            Pharmacies
          </Link>
          <Link className={styles.navLinksColor} to="/search-medicine">
            Order/Search Medicine
          </Link>
          <Link className={styles.navLinksColor} to="/view-patient-profile">
            Patient Profile
          </Link>
          <Link className={styles.navLinksColor} to="/upload-prescription">
            Upload Prescription
          </Link>
          {/* <Link to="/contact-us">Contact Us</Link> */}
        </div>
        {isAuthenticated ? (
          <li>
            <button
              className={styles.customButton}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button
              className={styles.customButton}
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          </li>
        )}
      </nav>
    </>
  );
};

export default Navbar;
