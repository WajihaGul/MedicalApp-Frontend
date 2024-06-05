import React from "react";
import styles from "./Footer.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer_grid}>
            <div className={styles.footer_item}>
              <h3>Contact Us</h3>
              <p>
                <FaPhone /> +1-123-456-7890
              </p>
              <p>
                <FaEnvelope /> info@medicalwebsite.com
              </p>
            </div>
            <div className={styles.footer - item}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#doctors">Doctors</a>
                </li>
                <li>
                  <a href="#pharmacy">Pharmacy</a>
                </li>
                <li>
                  <a href="#appointments">Appointments</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer - item}>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#appointment">Book Appointment</a>
                </li>
                <li>
                  <a href="#pharmacy-order">Order Medicine</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer - item}>
              <h3>Follow Us</h3>
              <ul className={styles.social - icons}>
                <li>
                  <a href="https://facebook.com">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer - bottom}>
          <div className={styles.container}>
            <p>
              &copy; {new Date().getFullYear()} Medical Website. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
