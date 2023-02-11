import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import kid from "../../images/kid-graphic.png";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>
                    Learning to <span className={styles.green}>Code</span>{" "}
                    <p className={styles.lineBreak}></p>
                    Shouldn't Be Hard
                </div>
                <p className={styles.description}>
                    Online coding classes taught by local high schoolers
                </p>
                <div className={styles.buttonGroup}>
                    <Link
                        to="/"
                        className={`${styles.button} ${styles.privateButton}`}
                    >
                        Private Lessons
                    </Link>
                    <Link
                        to="/"
                        className={`${styles.button} ${styles.groupButton}`}
                    >
                        Group Lessons
                    </Link>
                </div>
            </div>
            <img src={kid} className={styles.right} />
        </div>
    );
};

export default Home;
