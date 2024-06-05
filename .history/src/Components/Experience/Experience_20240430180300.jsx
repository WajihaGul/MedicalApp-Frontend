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
          <h3>HealthBuddy help increase your readers.</h3>
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
