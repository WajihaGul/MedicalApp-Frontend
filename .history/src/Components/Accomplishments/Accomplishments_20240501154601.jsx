import styles from "./Accomplishments.module.css";

const Accomplishments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <img
          className="cols_img"
          src="https://medi-dove.netlify.app/img/counter/counter-icon-7.png"
          alt=""
        />

        <p className={styles.explanationi}>540 + </p>

        <p className={styles.explanationii}>Expert Doctors</p>

        <p className={styles.explanationiii}>
          Our team of dedicated professionals ensures personalized care and
          expert guidance tailored to your unique health needs
        </p>
      </div>

      <div className={styles.column1}>
        <img
          className="cols_img"
          src="https://medi-dove.netlify.app/img/counter/counter-icon-9.png"
          alt=""
        />

        <p className={styles.explanationi}>899+</p>

        <p className={styles.explanationii}>Problem Solve</p>

        <p className={styles.explanationiii}>
          Our team delivers comprehensive problem-solving strategies, ensuring
          very optimal outcomes in the medical field.
        </p>
      </div>

      <div className={styles.column3}>
        <img
          className="cols_img"
          src="https://medi-dove.netlify.app/img/counter/counter-icon-83.png"
          alt=""
        />

        <p className={styles.explanationi}>100+</p>

        <p className={styles.explanationii}>Award Winner</p>

        <p className={styles.explanationiii}>
          With a track record of excellence, we continue to set the standard for
          cutting-edge medical information and services
        </p>
      </div>
    </div>
  );
};

export default Accomplishments;
