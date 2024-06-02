// import React from "react";
// import styles from "./Faqs.module.css";

// const Faqs = () => {
//   return (
//     <section className={styles.faq_section}>
//       <div className={styles.faq_content}>
//         <h2 className={styles.faq_h2}>FAQs</h2>
//         <div className={styles.faq_item}>
//           <h3>How can I schedule an appointment with a doctor?</h3>
//           <p>
//             To schedule an appointment with a doctor, simply navigate to the
//             "Book Appointments" section of our website and follow the prompts to
//             select your preferred doctor, date, and time slot.
//           </p>
//         </div>
//         <div className={styles.faq_item}>
//           <h3>Can I choose a specific doctor for my appointment?</h3>
//           <p>
//             Yes, you can choose a specific doctor for your appointment based on
//             their availability and specialization. Our website provides options
//             to filter doctors by specialty to help you find the right healthcare
//             provider for your needs.
//           </p>
//         </div>
//         <div className={styles.faq_item}>
//           <h3>
//             What information do I need to provide when booking an appointment?
//           </h3>
//           <p>
//             When booking an appointment, you will need to provide basic
//             information such as your name, contact details, reason for visit,
//             and any relevant medical history. This information helps us ensure
//             that you receive the appropriate care during your visit.
//           </p>
//         </div>
//         <div className={styles.faq_item}>
//           <h3>How can I order prescription medications from the pharmacy?</h3>
//           <p>
//             Ordering prescription medications from our pharmacy is easy. Simply
//             log in to your account on our website, navigate to the pharmacy
//             section, and browse our catalog of available medications. Add the
//             desired items to your cart, proceed to checkout, and follow the
//             instructions to complete your order
//           </p>
//         </div>

//         <div className={styles.faq_item}>
//           <h3>
//             How long does it take for prescription medications to be delivered?
//           </h3>
//           <p>
//             Prescription medication delivery times may vary depending on your
//             location and the availability of the medications you have ordered.
//             Typically, orders are processed and dispatched within 24 hours, and
//             delivery times range from 2-3 business days.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faqs;
import React from "react";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <section className={styles.faq_section}>
      <div className={styles.faq_content}>
        <h2 className={styles.faq_h2}>FAQs</h2>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How can I schedule an appointment with a doctor?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                To schedule an appointment with a doctor, simply navigate to the
                "Book Appointments" section of our website and follow the
                prompts to select your preferred doctor, date, and time slot.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can I choose a specific doctor for my appointment?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes, you can choose a specific doctor for your appointment based
                on their availability and specialization. Our website provides
                options to filter doctors by specialty to help you find the
                right healthcare provider for your needs.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What information do I need to provide when booking an
                appointment?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                When booking an appointment, you will need to provide basic
                information such as your name, contact details, reason for
                visit, and any relevant medical history. This information helps
                us ensure that you receive the appropriate care during your
                visit.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can I order prescription medications from the pharmacy?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Ordering prescription medications from our pharmacy is easy.
                Simply log in to your account on our website, navigate to the
                pharmacy section, and browse our catalog of available
                medications. Add the desired items to your cart, proceed to
                checkout, and follow the instructions to complete your order.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                How long does it take for prescription medications to be
                delivered?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Prescription medication delivery times may vary depending on
                your location and the availability of the medications you have
                ordered. Typically, orders are processed and dispatched within
                24 hours, and delivery times range from 2-3 business days.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
