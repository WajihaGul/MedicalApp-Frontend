import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const [storedEmail, setStoredEmail] = useState(
    localStorage.getItem("email") || ""
  );
  const [storedPassword, setStoredPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [storedRole, setStoredRole] = useState(
    localStorage.getItem("role") || ""
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (storedEmail && storedPassword) {
      setIsLoggedIn(true);
    }
  }, [storedEmail, storedPassword]);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("role");
    logout({ returnTo: window.location.origin });
  };

  const handleLoginSubmit = () => {
    const hashedPassword = btoa(password); // Basic encoding, use a proper hashing method in production
    localStorage.setItem("email", email);
    localStorage.setItem("password", hashedPassword);
    setStoredEmail(email);
    setStoredPassword(hashedPassword);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleRegisterSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!role) {
      alert("Please select your role");
      return;
    }

    if (password === confirmPassword) {
      const hashedPassword = btoa(password); // Basic encoding, use a proper hashing method in production
      localStorage.setItem("email", email);
      localStorage.setItem("password", hashedPassword);
      localStorage.setItem("role", role);
      setStoredEmail(email);
      setStoredPassword(hashedPassword);
      setStoredRole(role);
      setIsLoggedIn(true);
      setShowRegisterModal(false);
    } else {
      alert("Passwords do not match");
    }
  };

  const handleProfileView = () => {
    if (storedRole === "Doctor") {
      navigate("/ViewDoctorProfile");
    } else if (storedRole === "Patient") {
      navigate("/ViewPatientProfile");
    } else if (storedRole === "Pharmacy") {
      navigate("/AddPharmacy");
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.container}`}>
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
        <div
          className={`collapse navbar-collapse ${styles.navLinks}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLinksColor}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLinksColor}`}
                to="/doctors"
              >
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLinksColor}`}
                to="/search-medicine"
              >
                Pharmacy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.navLinksColor}`}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            {isAuthenticated ? (
              <li className={`nav-item dropdown ${styles.authli}`}>
                <a
                  className={`nav-link dropdown-toggle ${styles.customButton}`}
                  href="#"
                  id="dropdownMenuButton"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome, {user.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button className="dropdown-item" onClick={handleProfileView}>
                    View Profile
                  </button>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Log Out
                  </button>
                </div>
              </li>
            ) : (
              <li className={styles.authli}>
                <button className={styles.customButton} onClick={handleLogin}>
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Login Modal */}
      <Modal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        dialogClassName="modal-dialog-centered"
        contentClassName="custom-modal-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
           <Button>
              <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    setShowLoginModal(false); // Close the modal on success
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </Button>


//             <h2 style={{ fontSize: "larger", paddingLeft: "8px" }}>
//               Are you new here?
//               <span
//                 style={{ color: "blue", cursor: "pointer" }}
//                 onClick={() => {
//                   setShowLoginModal(false);
//                   setShowRegisterModal(true);
//                 }}
//               >
//                 {" "}
//                 Register Yourself Now
//               </span>
//             </h2>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       {/* Registration Modal */}
//       <Modal
//         show={showRegisterModal}
//         onHide={() => setShowRegisterModal(false)}
//         dialogClassName="modal-dialog-centered"
//         contentClassName="custom-modal-content"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Register</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <br />
//             <Form.Group>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <br />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group>
//               <br />
//               <Form.Label>What are you?</Form.Label>
//               <Form.Check
//                 type="radio"
//                 label="Doctor"
//                 name="role"
//                 value="Doctor"
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               <Form.Check
//                 type="radio"
//                 label="Patient"
//                 name="role"
//                 value="Patient"
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               <Form.Check
//                 type="radio"
//                 label="Pharmacy"
//                 name="role"
//                 value="Pharmacy"
//                 onChange={(e) => setRole(e.target.value)}
//               />
//             </Form.Group>
//             <br />

//             <Button
//               style={{ margin: "8px" }}
//               variant="primary"
//               onClick={handleRegisterSubmit}
//             >
//               Register
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default Navbar;

// import { GoogleLogin } from "@react-oauth/google";
// import styles from "./Navbar.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState("");

//   const [storedEmail, setStoredEmail] = useState(
//     localStorage.getItem("email") || ""
//   );
//   const [storedPassword, setStoredPassword] = useState(
//     localStorage.getItem("password") || ""
//   );
//   const [storedRole, setStoredRole] = useState(
//     localStorage.getItem("role") || ""
//   );

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (storedEmail && storedPassword) {
//       setIsLoggedIn(true);
//     }
//   }, [storedEmail, storedPassword]);

//   const handleLogin = () => {
//     setShowLoginModal(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//     localStorage.removeItem("role");
//   };

//   const handleLoginSubmit = () => {
//     const hashedPassword = btoa(password); // Basic encoding, use a proper hashing method in production
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", hashedPassword);
//     setStoredEmail(email);
//     setStoredPassword(hashedPassword);
//     setIsLoggedIn(true);
//     setShowLoginModal(false);
//   };

//   const handleRegisterSubmit = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address");
//       return;
//     }
//     if (!role) {
//       alert("Please select your role");
//       return;
//     }

//     if (password === confirmPassword) {
//       const hashedPassword = btoa(password); // Basic encoding, use a proper hashing method in production
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", hashedPassword);
//       localStorage.setItem("role", role);
//       setStoredEmail(email);
//       setStoredPassword(hashedPassword);
//       setStoredRole(role);
//       setIsLoggedIn(true);
//       setShowRegisterModal(false);
//     } else {
//       alert("Passwords do not match");
//     }
//   };

//   const handleProfileView = () => {
//     if (storedRole === "Doctor") {
//       navigate("/ViewDoctorProfile");
//     } else if (storedRole === "Patient") {
//       navigate("/ViewPatientProfile");
//     } else if (storedRole === "Pharmacy") {
//       navigate("/AddPharmacy");
//     }
//   };

//   return (
//     <>
//       <nav className={`navbar navbar-expand-lg ${styles.container}`}>
//         <div className={styles.logo}>
//           <img
//             className={styles.nav_img}
//             src="https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png"
//             alt="logo"
//           />
//           <Link to="/" className={styles.nav_head_link}>
//             <h1 className={styles.nav_head}>HealthBuddy</h1>
//           </Link>
//         </div>
//         <div
//           className={`collapse navbar-collapse ${styles.navLinks}`}
//           id="navbarNav"
//         >
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className={`nav-link ${styles.navLinksColor}`} to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={`nav-link ${styles.navLinksColor}`}
//                 to="/doctors"
//               >
//                 Doctors
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={`nav-link ${styles.navLinksColor}`}
//                 to="/search-medicine"
//               >
//                 Pharmacy
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={`nav-link ${styles.navLinksColor}`}
//                 to="/contact"
//               >
//                 Contact Us
//               </Link>
//             </li>
//             {isLoggedIn ? (
//               <li className={`nav-item dropdown ${styles.authli}`}>
//                 <a
//                   className={`nav-link dropdown-toggle ${styles.customButton}`}
//                   href="#"
//                   id="dropdownMenuButton"
//                   role="button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Welcome, {storedEmail}
//                 </a>
//                 <div
//                   className="dropdown-menu"
//                   aria-labelledby="dropdownMenuButton"
//                 >
//                   <button className="dropdown-item" onClick={handleProfileView}>
//                     View Profile
//                   </button>
//                   <button className="dropdown-item" onClick={handleLogout}>
//                     Log Out
//                   </button>
//                 </div>
//               </li>
//             ) : (
//               <li className={styles.authli}>
//                 <button className={styles.customButton} onClick={handleLogin}>
//                   Log In
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>

//       {/* Login Modal */}
//       <Modal
//         show={showLoginModal}
//         onHide={() => setShowLoginModal(false)}
//         dialogClassName="modal-dialog-centered"
//         contentClassName="custom-modal-content"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>
//             <Row className="align-items-center">
//               <Col>
//                 <Button
//                   style={{ margin: "8px" }}
//                   variant="primary"
//                   onClick={handleLoginSubmit}
//                 >
//                   Login
//                 </Button>
//               </Col>
//               <GoogleLogin
//                   onSuccess={(credentialResponse) => {
//                     console.log(credentialResponse);
//                     setShowLoginModal(false); // Close the modal on success
//                   }}
//                   onError={() => {
//                     console.log("Login Failed");
//                   }}
//                 />
                
//             </Row>
//             <h2 style={{ fontSize: "larger", paddingLeft: "8px" }}>
//               Are you new here?
//               <span
//                 style={{ color: "blue", cursor: "pointer" }}
//                 onClick={() => {
//                   setShowLoginModal(false);
//                   setShowRegisterModal(true);
//                 }}
//               >
//                 {" "}
//                 Register Yourself Now
//               </span>
//             </h2>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       {/* Registration Modal */}
//       <Modal
//         show={showRegisterModal}
//         onHide={() => setShowRegisterModal(false)}
//         dialogClassName="modal-dialog-centered"
//         contentClassName="custom-modal-content"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Register</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <br />
//             <Form.Group>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <br />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group>
//               <br />
//               <Form.Label>What are you?</Form.Label>
//               <Form.Check
//                 type="radio"
//                 label="Doctor"
//                 name="role"
//                 value="Doctor"
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               <Form.Check
//                 type="radio"
//                 label="Patient"
//                 name="role"
//                 value="Patient"
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               <Form.Check
//                 type="radio"
//                 label="Pharmacy"
//                 name="role"
//                 value="Pharmacy"
//                 onChange={(e) => setRole(e.target.value)}
//               />
//             </Form.Group>
//             <br />

//             <Button
//               style={{ margin: "8px" }}
//               variant="primary"
//               onClick={handleRegisterSubmit}
//             >
//               Register
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default Navbar;
