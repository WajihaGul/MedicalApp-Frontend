import React from "react";

const FAQSection = () => {
  return (
    <section className={styles.faq_section}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faq_item}>
        <h3>What are the clinic's opening hours?</h3>
        <p>
          Our clinic is open Monday to Friday from 9:00 AM to 5:00 PM, and on
          Saturdays from 9:00 AM to 12:00 PM. We are closed on Sundays.
        </p>
      </div>
      <div className={styles.faq_item}>
        <h3>Do I need to schedule an appointment?</h3>
        <p>
          Yes, we recommend scheduling an appointment to ensure timely service
          and minimize waiting times. However, walk-ins are also welcome.
        </p>
      </div>
      <div className={styles.faq_item}>
        <h3>What insurance plans do you accept?</h3>
        <p>
          We accept a wide range of insurance plans. Please contact our
          reception desk or check our website for the list of accepted insurance
          providers.
        </p>
      </div>
      <div className={styles.faq_item}>
        <h3>How can I pay for my visit?</h3>
        <p>
          We accept cash, credit/debit cards, and mobile payment methods such as
          Apple Pay and Google Pay. We also accept payment through most major
          insurance providers.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
