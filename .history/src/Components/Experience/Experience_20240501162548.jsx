import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            className={styles.logo_img}
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hospital-7132361-5916035.png?f=webp&w=256"
            alt="logo here"
          />
        </div>
        <div className={styles.experience}>
          <h1 className={styles.head1}>25+ Years Of Experience</h1>

          <br />
          <h6>
            HealthBuddy helps you in searching available doctors as well as
            medicines
          </h6>
        </div>
        <div className={styles.story}>
          <p className={styles.story_p}>
            Drawing upon a wealth of over 25 years of collective experience in
            the healthcare sector, our team brings unparalleled expertise to the
            development of medical websites. With a focus on user-centric design
            and accessibility, we create intuitive interfaces that prioritize
            patient engagement and professional credibility.
          </p>
        </div>
        <hr style={{marginBottom: '20px'}}
      </div>
      
    </>
  );
};
export default Experience;
