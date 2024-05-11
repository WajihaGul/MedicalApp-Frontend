import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.divimg}>
          <img
            className={styles.eimg}
            src="/Assets/Experience_image.png"
            alt="logo here"
          />
        </div>

        <div>
          <h1 className={styles.ehead1}>25+ Years Of Experience</h1>
          <br />
          <h6 className={styles.ehead6}>
            HealthBuddy helps you in searching available doctors as well as
            medicines
          </h6>
        </div>
        <div>
          <p className={styles.story_p}>
            Building upon a robust foundation of more than 25 years of combined
            experience within the healthcare industry, our team leverages
            unparalleled expertise in crafting innovative medical websites.
            Emphasizing user-centric design and accessibility, we meticulously
            develop intuitive interfaces that foster heightened patient
            engagement and bolster professional credibility.
          </p>
        </div>
      </div>
    </>
  );
};
export default Experience;
