import React from "react";
import CoursesSlider from "../../../components/CoursesSlider/CoursesSlider.component";

import style from "./Lessons.module.css";
import learning from "../../../images/learning.jpeg";
import { Contact } from "./Contact/Contact.component";

export const Lessons = () => {
  return (
    <div className={style.lessonsContainer}>
      <h1 className={style.privateTitle}>Want Private Lessons?</h1>
      <div className={style.privateLessonsContainer}>
        <img src={learning} alt="Private Lessons" className={style.image} />
        <Contact />
      </div>
      <h1 className={style.groupTitle}>Prefer Group Ones?</h1>
      <CoursesSlider />
    </div>
  );
};
