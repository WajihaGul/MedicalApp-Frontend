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
            Drawing upon a wealth of over 25 years of collective experience in
            the healthcare sector, our team brings unparalleled expertise to the
            development of medical websites. With a focus on user-centric design
            and accessibility, we create intuitive interfaces that prioritize
            patient engagement and professional credibility. By staying abreast
            of the latest industry trends and technological advancements, we
            ensure that our websites not only meet but exceed the expectations
            of both healthcare providers and their patients. Our commitment to
            excellence drives us to deliver solutions that resonate with our
            clients' goals and aspirations, ultimately contributing to the
            advancement of healthcare services in today's digital landscape.
          </p>
        </div>
      </div>
    </>
  );
};
export default Experience;
