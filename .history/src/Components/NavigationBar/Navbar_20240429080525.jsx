import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className="logo">
          <img src="/images/navlogo.png" alt="logo" />
        </div>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <button></button>
      </nav>
    </>
  );
};

export default Navbar;
