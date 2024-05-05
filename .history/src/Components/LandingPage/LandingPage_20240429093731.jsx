import styles from "./LandingPage.module.css"; // Import the CSS module styles

const LandingPage = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className={`${styles.carousel} ${styles.slide}`}
      >
        <div className={styles.indicators}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={`${styles.indicator} ${styles.active}`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className={styles.indicator}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className={styles.indicator}
            aria-label="Slide 3"
          ></button>
        </div>
        <div className={styles.inner}>
          <div className={`${styles.item} ${styles.active}`}>
            <img
              src="..."
              className={`${styles.img} ${styles.block} ${styles.w100}`}
              alt="..."
            />
          </div>
          <div className={styles.item}>
            <img
              src="..."
              className={`${styles.img} ${styles.block} ${styles.w100}`}
              alt="..."
            />
          </div>
          <div className={styles.item}>
            <img
              src="..."
              className={`${styles.img} ${styles.block} ${styles.w100}`}
              alt="..."
            />
          </div>
        </div>
        <button
          className={`${styles.control} ${styles.prev}`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className={styles.prevIcon} aria-hidden="true"></span>
          <span className={styles.visuallyHidden}>Previous</span>
        </button>
        <button
          className={`${styles.control} ${styles.next}`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className={styles.nextIcon} aria-hidden="true"></span>
          <span className={styles.visuallyHidden}>Next</span>
        </button>
      </div>
    </>
  );
};

export default LandingPage;
