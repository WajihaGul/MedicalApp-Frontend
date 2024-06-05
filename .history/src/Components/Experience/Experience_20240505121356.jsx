import styles from "./Experience.module.css";
//import experience_image from "../../../public/Assests/Experience_image.png";
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
          <h6 style={color:'#fd2525'}>
            HealthBuddy helps you in searching available doctors as well as
            medicines
          </h6>
        </div>
        <div>
          <p className={styles.story_p}>
            Drawing upon a wealth of over 25 years of collective experience in
            the healthcare sector, our team brings unparalleled expertise to the
            development of medical websites. With a focus on user-centric design
            and accessibility, we create intuitive interfaces that prioritize
            patient engagement and professional credibility.
          </p>
        </div>
      </div>
    </>
  );
};
export default Experience;
