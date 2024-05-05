import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://cdn.icon-icons.com/icons2/3357/PNG/512/urgency_security_electronics_emergency_alert_hospital_ambulance_siren_icon_210653.png"
            alt="logo here"
          />
        </div>
        <div className={styles.experience}>
          <h1>25+ Years Of Experience</h1>
          <br />
          <br />
          <h6>
            Drawing upon a wealth of over 25 years of collective experience in
            the healthcare sector, our team brings unparalleled expertise to the
            development of medical websites. With a focus on user-centric design
            and accessibility, we create intuitive interfaces that prioritize
            patient engagement and professional credibility. Leveraging
            cutting-edge technologies and best practices, we craft robust online
            platforms tailored to meet the unique needs of medical
            professionals, patients, and caregivers alike.
          </h6>
        </div>
        <div className={styles.story}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, velit
          dolorum dicta quaerat eius eveniet officia. Vero aliquid, eum esse
          repellat adipisci ipsa tempora? Ab soluta nihil officia ut asperiores.
        </div>
      </div>
    </>
  );
};
export default Experience;
