import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <>
      <div>
        <div className={styles.logo}>
          <img
            className={styles.logo_img}
            //src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hospital-7132361-5916035.png?f=webp&w=256"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZXGaJvo51q6fB5o6RkAWAJIYiz5f6YbeVC2RMLELew&s"
            alt="logo here"
          />
        </div>
        {/* <div className={styles.experience}>
          <h1 className={styles.head1}>25+ Years Of Experience</h1>

          <br />
          <h6 className={styles.navh6}>
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
        </div> */}
      </div>
    </>
  );
};
export default Experience;
