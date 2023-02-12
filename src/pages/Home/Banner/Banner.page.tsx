import React from "react";
import style from "./Banner.module.css";
export const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerItem}>
        <h1 className={style.bannerItemTitle}>60+</h1>
        <p className={style.bannerItemDescription}>Students Taught</p>
      </div>
      <div className={style.line}></div>
      <div className={style.bannerItem}>
        <h1 className={style.bannerItemTitle}>300+</h1>
        <p className={style.bannerItemDescription}>Hours Taught</p>
      </div>
      <div className={style.line}></div>
      <div className={style.bannerItem}>
        <h1 className={style.bannerItemTitle}>5+</h1>
        <p className={style.bannerItemDescription}>Courses</p>
      </div>
    </div>
  );
};
