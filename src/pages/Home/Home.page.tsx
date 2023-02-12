import React from "react";
import styles from "./Home.module.css";
import kid from "../../images/kid-graphic.png";
import { Landing } from "./Landing/Landing.page";
import { Banner } from "./Banner/Banner.page";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Landing kid={kid} />
      <Banner />
    </div>
  );
};

export default Home;
