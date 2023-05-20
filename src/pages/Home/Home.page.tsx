import React from "react";
import styles from "./Home.module.css";
import kid from "../../images/kid-graphic.jpeg";
import { Landing } from "./Landing/Landing.page";
import { Banner } from "./Banner/Banner.page";
import { UniversalPadding } from "../../components/UniversalPadding/UniversalPadding.component";
import { Reviews } from "./Reviews/Reviews.page";
import { Lessons } from "./Lessons/Lessons.page";
import { MeetTheTeam } from "../../components/meet-the-team/MeetTheTeam";
import employees from "../../data/employees";
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
        <MeetTheTeam title="Meet Your Instructors" employees={employees} />
      </UniversalPadding>
    </div>
  );
};

export default Home;
