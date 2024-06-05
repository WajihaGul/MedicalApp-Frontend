import styles from "./Departments.module.css";
import { FiPlusCircle } from "react-icons/fi";

const Departments = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.dtext}>
            <h1>Departments</h1>
            <br />
            <h1>Managed Your HealthCare Services</h1>\
            <div className={styles.dbtn}>
              <button>Make MakeAppointment</button>
            </div>
          </div>

          {/* <div>cards here</div> */}
        </div>
      </div>
    </>
  );
};
export default Departments;
