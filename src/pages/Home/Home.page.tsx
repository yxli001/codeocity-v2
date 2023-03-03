import React from "react";
import styles from "./Home.module.css";
import kid from "../../images/kid-graphic.jpeg";
import { Landing } from "./Landing/Landing.page";
import { Banner } from "./Banner/Banner.page";
import { UniversalPadding } from "../../components/UniversalPadding/UniversalPadding.component";
import { Reviews } from "./Reviews/Reviews.page";
import { Lessons } from "./Lessons/Lessons.page";
import Why from "./Why/Why.page";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <UniversalPadding>
        <Landing kid={kid} />
      </UniversalPadding>
      <Banner />
      <UniversalPadding>
        <Reviews />
        <Lessons />
      </UniversalPadding>
    </div>
  );
};

export default Home;
