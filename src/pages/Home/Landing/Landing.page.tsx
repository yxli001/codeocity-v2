import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

export const Landing = ({ kid = "" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          Learning to <span className={styles.green}>Code</span>{" "}
          <p className={styles.lineBreak}></p>
          Isn't Hard
        </div>
        <p className={styles.description}>
          Online coding classes taught by local high schoolers
        </p>
        <div className={styles.buttonGroup}>
          <Link to="/" className={`${styles.button} ${styles.privateButton}`}>
            Private Lessons
          </Link>
          <Link to="/" className={`${styles.button} ${styles.groupButton}`}>
            Group Lessons
          </Link>
        </div>
      </div>
      <img src={kid} className={styles.right} alt="Student on computer" />
    </div>
  );
};
