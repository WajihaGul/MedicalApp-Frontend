import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className="logo">
          HealthBuddy
          <img src="/images/navlogo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Doctors</li>
          <li href="#">Pharmacies</li>
          <li href="#">Contact Us</li>
        </ul>
        <button>login</button>
      </nav>
    </>
  );
};

export default Navbar;
