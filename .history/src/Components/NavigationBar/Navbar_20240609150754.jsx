import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storedEmail, setStoredEmail] = useState(
    localStorage.getItem("email") || ""
  );
  const [storedPassword, setStoredPassword] = useState(
    localStorage.getItem("password") || ""
  );

  useEffect(() => {
    if (storedEmail && storedPassword) {
      setIsLoggedIn(true);
    }
  }, [storedEmail, storedPassword]);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  const handleLoginSubmit = () => {
    const hashedPassword = btoa(password); // Basic encoding, use a proper hashing method in production
    localStorage.setItem("email", email);
    localStorage.setItem("password", hashedPassword);
    setStoredEmail(email);
    setStoredPassword(hashedPassword);
    setIsLoggedIn(true);
    setShowModal(false);
  };

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <img
            className={styles.nav_img}
            src="https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png"
            alt="logo"
          />
          <Link to="/" className={styles.nav_head_link}>
            <h1 className={styles.nav_head}>HealthBuddy</h1>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.allnav}>
            <Link className={styles.navLinksColor} to="/">
              Home
            </Link>
            <Link className={styles.navLinksColor} to="/doctors">
              Doctors
            </Link>
            {/* <Link className={styles.navLinksColor} to="/Pharmacy">
              Pharmacy
            </Link> */}
            <Link className={styles.navLinksColor} to="/search-medicine">
              Pharmacy
            </Link>
            <Link className={styles.navLinksColor} to="/contact">
              Contact Us
            </Link>

            {/* <Link className={styles.navLinksColor} to="/ViewPatientProfile">
            Patient Profile
  </Link> */}
          </div>
          <div id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {isLoggedIn || isAuthenticated ? (
                <li>
                  <button
                    className={styles.customButton}
                    onClick={() => {
                      handleLogout();
                      logout({ returnTo: window.location.origin });
                    }}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <button className={styles.customButton} onClick={handleLogin}>
                    Log In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          dialogClassName="modal-dialog-centered"
          contentClassName="custom-modal-content"
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ margin: "8px" }}
              variant="primary"
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
            <Button
              variant="primary"
              onClick={() => loginWithRedirect()}
              style={{ margin: "8px" }}
            >
              Login With Google
            </Button>
            <h2 style={{ fontSize: "larger", paddingLeft: "8px" }}>
              Are you new here? Register Yourself Now{" "}
            </h2>{" "}
            <Button
              variant="primary"
              onClick={() => loginWithRedirect()}
              style={{ margin: "8px" }}
            >
              Register
            </Button>
          </Modal.Body>
        </Modal>
      </nav>
    </>
  );
};

export default Navbar;
