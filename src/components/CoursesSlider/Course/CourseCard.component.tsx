import React from "react";
import { Course } from "../../../data/types";

import styles from "./CourseCard.module.css";

type Props = {
  course: Course;
  className?: string;
};

const CourseComponent: React.FC<Props> = ({ course, className }: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <img src={course.image} alt={course.title} className={styles.image} />
      <p className={styles.title}>{course.title}</p>
      <p className={styles.description}>
        {course.numClasses} classes | ${course.price}
      </p>
    </div>
  );
};

export default CourseComponent;
