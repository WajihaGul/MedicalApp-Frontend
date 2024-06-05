import styles from "./MakeAppointment.module.css";
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
          <button type="button">
            <RiCalendarScheduleLine />
            Make an Appointment Today
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeAppointment;
