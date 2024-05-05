import styles from "./Departments.module.css";
import { FiPlusCircle } from "react-icons/fi";
import MakeAppointment from "./../MakeAppointment/MakeAppointment";
const Departments = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.depbtn}>
            <h1>Departments</h1>
            <br />
            <h1>Managed Your HealthCare Services</h1>\
            <button>Make MakeAppointment</button>
          </div>

          {/* <div>cards here</div> */}
        </div>
      </div>
    </>
  );
};
export default Departments;
