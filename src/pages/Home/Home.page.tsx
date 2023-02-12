import React from "react";
import styles from "./Home.module.css";
import kid from "../../images/kid-graphic.png";
import { Landing } from "./Landing/Landing.page";
import { Banner } from "./Banner/Banner.page";
import { UniversalPadding } from "../../components/UniversalPadding/UniversalPadding.component";
import { Reviews } from "./Reviews/Reviews.page";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <UniversalPadding>
        <Landing kid={kid} />
      </UniversalPadding>
      <Banner />
      <UniversalPadding>
        <Reviews />
      </UniversalPadding>
    </div>
  );
};

export default Home;
