import React from "react";
import { Course } from "../../data/types";

import styles from "./CourseCard.module.css";

type Props = {
    course: Course;
    className?: string;
    description?: string;
};

const CourseCard: React.FC<Props> = ({
    course,
    className,
    description,
}: Props) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <img
                src={course.image}
                alt={course.title}
                className={styles.image}
            />
            <p className={styles.title}>{course.title}</p>
            <p className={styles.info}>
                {course.numClasses} classes | ${course.price}
            </p>
            {description && (
                <p className={styles.description}>
                    {description.length < 110
                        ? description
                        : `${description.slice(0, 110)}...`}
                </p>
            )}
        </div>
    );
};

export default CourseCard;
