import "navlogo.png" from './images/navlogo.png';
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className="logo">
          <img src="../images/navlogo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>login</button>
      </nav>
    </>
  );
};

export default Navbar;
