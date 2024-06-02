import styles from "./MakeAppointment.module.css";
import { Link } from "react-router-dom";
import { RiCalendarScheduleLine } from "react-icons/ri";

const MakeAppointment = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.divii}>
          <h3 className={styles.head3}>HealthCare Services</h3>
          <h1 className={styles.head1}>
            Don't Hesitate, Contact Us For Better Help & Services.
          </h1>
        </div>

        <div className={styles.ButtonHere}>
        <Link to="/contact">
          <button className={styles.mbuttontype="button">
            <RiCalendarScheduleLine className={styles.micon} />
            Book an Appointment
          </button> 
        </Link>
          {/* <Link to="/contact">
            <button className={styles.mbutton} type="button">
              <RiCalendarScheduleLine className={styles.micon} /> */}
            //   Book an Appointment
            // </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MakeAppointment;
