import React from "react";
import CourseCard from "./Course/CourseCard.component";
import courses from "../../data/courses";

import styles from "./CoursesSlider.module.css";

const CoursesCarousel = () => {
  return (
    <div className={styles.container}>
      {courses.map((course) => {
        return (
          <CourseCard course={course} key={course.id} className={styles.item} />
        );
      })}
    </div>
  );
};

export default CoursesCarousel;
