import React from "react";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <section className={styles.faq_section}>
      <div className={styles.faq_content}>
        <h2 className={styles.faq_h2}>FAQs</h2>
        <div className={styles.faq_item}>
          <h3>How can I schedule an appointment with a doctor?</h3>
          <p>
            To schedule an appointment with a doctor, simply navigate to the
            "Book Appointments" section of our website and follow the prompts to
            select your preferred doctor, date, and time slot.
          </p>
        </div>
        <div className={styles.faq_item}>
          <h3>Can I choose a specific doctor for my appointment?</h3>
          <p>
            Yes, you can choose a specific doctor for your appointment based on
            their availability and specialization. Our website provides options
            to filter doctors by specialty to help you find the right healthcare
            provider for your needs.
          </p>
        </div>
        <div className={styles.faq_item}>
          <h3>
            What information do I need to provide when booking an appointment?
          </h3>
          <p>
            When booking an appointment, you will need to provide basic
            information such as your name, contact details, reason for visit,
            and any relevant medical history. This information helps us ensure
            that you receive the appropriate care during your visit.
          </p>
        </div>
        <div className={styles.faq_item}>
          <h3>How can I order prescription medications from the pharmacy?</h3>
          <p>
            Ordering prescription medications from our pharmacy is easy. Simply
            log in to your account on our website, navigate to the pharmacy
            section, and browse our catalog of available medications. Add the
            desired items to your cart, proceed to checkout, and follow the
            instructions to complete your order
          </p>
        </div>

        <div className={styles.faq_item}>
          <h3>
            How long does it take for prescription medications to be delivered?
          </h3>
          <p>
            Prescription medication delivery times may vary depending on your
            location and the availability of the medications you have ordered.
            Typically, orders are processed and dispatched within 24 hours, and
            delivery times range from 2-3 business days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
