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
        <br />
        <p className={styles.explanationii}>Expert Doctors</p>

        <p className={styles.explanationiii}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          libero, scum architecto tempore provident similique sed repudiandae
          dolores nisi labori
        </p>
      </div>

      <div className={styles.column1}>
        <img
          className="cols_img"
          src="https://medi-dove.netlify.app/img/counter/counter-icon-9.png"
          alt=""
        />

        <p className={styles.explanationi}>899+</p>
        <br />
        <p className={styles.explanationiii}>Problem Solve</p>

        <p className={styles.explanationii}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          esse labore
        </p>
      </div>

      <div className={styles.column3}>
        <img
          className="cols_img"
          src="https://medi-dove.netlify.app/img/counter/counter-icon-83.png"
          alt=""
        />

        <p className={styles.explanationi}>100+</p>
        <br />
        <p className={styles.explanationii}>Award Winner</p>

        <p className={styles.explanationiii}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          corrupti expedita explicabo voluptates! Quae repellendus iure
        </p>
      </div>
    </div>
  );
};

export default Accomplishments;
