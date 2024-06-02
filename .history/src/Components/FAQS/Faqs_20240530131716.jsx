import React from "react";
import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    return (
      <>
        <div className={styles.parentdiv}>
          <h1 className={styles.faqh1}>Frequently Asked Questions</h1>
          <div
            className={`accordion accordion-flush id="accordionFlushExample"  ${styles.container}`}
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "75px",
                    fontSize: "x-large",
                  }}
                >
                  How can I schedule an appointment with a doctor?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "211px",
                    fontSize: "x-large",
                  }}
                >
                  To schedule an appointment with a doctor, simply navigate to the
              "Book Appointments" section of our website and follow the prompts to
              select your preferred doctor, date, and time slot.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "75px",
                    fontSize: "x-large",
                  }}
                >
                  Can I choose a specific doctor for my appointment?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "157px",
                    fontSize: "x-large",
                  }}
                >
                  Yes, you can choose a specific doctor for your appointment based on
              their availability and specialization. Our website provides options
              to filter doctors by specialty to help you find the right healthcare
              provider for your needs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "75px",
                    fontSize: "x-large",
                  }}
                >
                  What information do I need to provide when booking an appointment?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body "
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "250px",
                    fontSize: "x-large",
                  }}
                >
                 When booking an appointment, you will need to provide basic
              information such as your name, contact details, reason for visit,
              and any relevant medical history. This information helps us ensure
              that you receive the appropriate care during your visit.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "75px",
                    fontSize: "x-large",
                  }}
                >
  How can I order prescription medications from the pharmacy?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "132px",
                    fontSize: "x-large",
                  }}
                >
                  Ordering prescription medications from our pharmacy is easy. Simply
              log in to your account on our website, navigate to the pharmacy
              section, and browse our catalog of available medications. Add the
              desired items to your cart, proceed to checkout, and follow the
              instructions to complete your order
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "75px",
                    fontSize: "x-large",
                  }}
                >
                   How long does it take for prescription medications to be delivered?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "103px",
                    fontSize: "x-large",
                  }}
                >
                   Prescription medication delivery times may vary depending on your
              location and the availability of the medications you have ordered.
              Typically, orders are processed and dispatched within 24 hours, and
              delivery times range from 2-3 business days.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "75px",
                    fontSize: "x-large",
                  }}
                >
                  Is Netflix good for kids?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    backgroundColor: "rgb(55, 55, 55)",
                    color: "white",
                    height: "175px",
                    fontSize: "x-large",
                  }}
                >
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.SignupText}>
              Ready to watch? Enter your email to create or restart your
              membership
            </p>
            <div className={styles.signupwithbtn}>
              <input
                className={styles.SignupForm}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button className={styles.SignUpBtn}>Get Started</button>
            </div>
          </div>
        </div>
      </>
    // <section className={styles.faq_section}>
    //   <div className={styles.faq_content}>
    //     <h2 className={styles.faq_h2}>FAQs</h2>
    //     <div className={styles.faq_item}>
    //       <h3>How can I schedule an appointment with a doctor?</h3>
    //       <p>
    //         To schedule an appointment with a doctor, simply navigate to the
    //         "Book Appointments" section of our website and follow the prompts to
    //         select your preferred doctor, date, and time slot.
    //       </p>
    //     </div>
    //     <div className={styles.faq_item}>
    //       <h3>Can I choose a specific doctor for my appointment?</h3>
    //       <p>
    //         Yes, you can choose a specific doctor for your appointment based on
    //         their availability and specialization. Our website provides options
    //         to filter doctors by specialty to help you find the right healthcare
    //         provider for your needs.
    //       </p>
    //     </div>
    //     <div className={styles.faq_item}>
    //       <h3>
    //         What information do I need to provide when booking an appointment?
    //       </h3>
    //       <p>
    //         When booking an appointment, you will need to provide basic
    //         information such as your name, contact details, reason for visit,
    //         and any relevant medical history. This information helps us ensure
    //         that you receive the appropriate care during your visit.
    //       </p>
    //     </div>
    //     <div className={styles.faq_item}>
    //       <h3>How can I order prescription medications from the pharmacy?</h3>
    //       <p>
    //         Ordering prescription medications from our pharmacy is easy. Simply
    //         log in to your account on our website, navigate to the pharmacy
    //         section, and browse our catalog of available medications. Add the
    //         desired items to your cart, proceed to checkout, and follow the
    //         instructions to complete your order
    //       </p>
    //     </div>

    //     <div className={styles.faq_item}>
    //       <h3>
    //         How long does it take for prescription medications to be delivered?
    //       </h3>
    //       <p>
    //         Prescription medication delivery times may vary depending on your
    //         location and the availability of the medications you have ordered.
    //         Typically, orders are processed and dispatched within 24 hours, and
    //         delivery times range from 2-3 business days.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Faqs;
