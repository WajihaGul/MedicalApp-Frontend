import styles from "./Departments.module.css";
import { FiPlusCircle } from "react-icons/fi";
const Departments = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ddivi}>
          <h6 className={styles.divih1}>Departments</h6>
          <p className={styles.divip}>Managed Your Heathcare Services</p>
        </div>

        <div className={styles.ddivii}>
          <button className={styles.dbutton}>
            <FiPlusCircle className={styles.dicon} />
            More Services
          </button>

          <div className={styles.dcards}>
            <div className={styles.dcardi}>
              <div className="card" {style=width: 18rem}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Departments;
