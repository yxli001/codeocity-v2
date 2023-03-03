import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../../data/types";

import styles from "./CourseCard.module.css";

type Props = {
    course: Course;
    className?: string;
    description?: string;
    big?: boolean;
};

const CourseCard: React.FC<Props> = ({
    course,
    className,
    description,
    big,
}: Props) => {
    return (
        <Link
            to={`/courses/${course.id}`}
            className={`${
                big ? styles.bigContainer : styles.container
            } ${className}`}
        >
            <img
                src={course.image}
                alt={course.title}
                className={styles.image}
            />
            <p
                className={`${styles.title} ${big && styles.green}`}
                style={{ fontSize: big ? 30 : undefined }}
            >
                {course.title}
            </p>
            <p className={styles.info}>
                {course.numClasses} classes | ${course.price}
            </p>
            {description && (
                <p className={styles.description}>
                    {description.length < 200
                        ? description
                        : `${description.slice(0, 200)}...`}
                </p>
            )}
        </Link>
    );
};

export default CourseCard;
