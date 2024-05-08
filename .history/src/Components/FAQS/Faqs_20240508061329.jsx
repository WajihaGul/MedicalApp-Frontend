import React from "react";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <section className={styles.faq_section}>
      <div className={styles.image_container}>
        <img
          className={styles.left_back_image}
          src="https://medi-dove.netlify.app/img/faq/faq-left-back.jpg"
          alt="Left Background"
        />
        <img
          className={styles.left_front_image}
          src="https://medi-dove.netlify.app/img/faq/faq-left-front.jpg"
          alt="Left Front"
        />
      </div>
      <div className={styles.faq_content}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faq_item}>
          <h3>What are the clinic's opening hours?</h3>
          <p>
            Our clinic is open Monday to Friday from 9:00 AM to 5:00 PM, and on
            Saturdays from 9:00 AM to 12:00 PM. We are closed on Sundays.
          </p>
        </div>
        {/* Add more FAQ items here */}
      </div>
    </section>
  );
};

export default Faqs;
