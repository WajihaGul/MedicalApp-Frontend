import styles from "./Departments.module.css";
const Departments = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ddivi}>
          <h6 className={styles.divih1}>Departments</h6>
          <p className={styles.divip}>Managed Your Heathcare Services</p>
        </div>

        <div className={styles.ddivii}>
          <button>More Services</button>
        </div>
      </div>
    </>
  );
};
export default Departments;
