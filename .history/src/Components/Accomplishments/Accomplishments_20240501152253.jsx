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

        <p className={styles.explanation}>
          Lorem ipsum
          <br />
          dolor sit
        </p>

        <p className={styles.explanation}>
          Lorem ipsum
          <br />
          dolor sit
        </p>
      </div>

      <div className={styles.column1}>
        <img className="cols_img" src="" alt="" />

        <p className={styles.explanation}>
          Lorem ipsum
          <br />
          dolor sit
        </p>

        <p className={styles.explanation}>
          Lorem ipsum
          <br />
          dolor sit
        </p>
      </div>

      <div className={styles.column3}>
        <img className="cols_img" src="" alt="" />

        <p className={styles.explanation}>
          Lorem ipsum
          <br />
          dolor sit
        </p>

        <p className={styles.explanation}>
          Lorem ipsum
          <br />
          dolor sit
        </p>
      </div>
    </div>
  );
};

export default Accomplishments;
