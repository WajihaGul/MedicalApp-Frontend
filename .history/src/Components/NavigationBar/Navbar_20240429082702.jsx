import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className="logo">
          <img src="/images/navlogo.png" alt="logo" />
          HealthBuddy
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Doctors</li>
          <li href="#">Pharmacies</li>
          <li href="#">About Us</li>
        </ul>

        <button type="button" className="btn btn-primary btn-lg">
          Contact Us
        </button>
      </nav>
    </>
  );
};

export default Navbar;
