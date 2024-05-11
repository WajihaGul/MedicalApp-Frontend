import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            suscipit excepturi vel porro officia reprehenderit sapiente illum,
            sunt placeat magni sit inventore officiis incidunt iusto eaque
            laboriosam nisi aliquid obcaecati?
          </p>
        </div>
        <div className={styles.experience}>
          <h1 className={styles.head1}>25+ Years Of Experience</h1>
          <br />
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
            patient engagement and professional credibility. Leveraging
            cutting-edge technologies and best practices, we craft robust online
            platforms tailored to meet the unique needs of medical
            professionals, patients, and caregivers alike.
          </p>
        </div>
      </div>
    </>
  );
};
export default Experience;
