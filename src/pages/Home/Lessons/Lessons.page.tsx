import React from "react";
import style from "./Lessons.module.css";
import learning from "../../../images/learning.png";

export const Lessons = () => {
  return (
    <div className={style.lessonsContainer}>
      <h1 className={style.privateTitle}>Want Private Lessons?</h1>
      <div className={style.privateLessonsContainer}>
        <img src={learning} alt="Private Lessons" className={style.image} />
        <div className={style.privateLessonsFormContainer}></div>
      </div>
      <h1 className={style.groupTitle}>Prefer Group Ones?</h1>
    </div>
  );
};
