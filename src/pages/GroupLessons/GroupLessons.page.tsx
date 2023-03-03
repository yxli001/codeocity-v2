import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard.component";
import { UniversalPadding } from "../../components/UniversalPadding/UniversalPadding.component";

import courses from "../../data/courses";
import styles from "./GroupLessons.module.css";

const GroupLessons = () => {
    return (
        <UniversalPadding>
            <div>
                <h1 className={styles.title}>Group Lessons</h1>
                <div className={styles.courses}>
                    {courses.map((course, index) => (
                        <CourseCard
                            course={course}
                            key={course.id}
                            description={course.description}
                            className={styles.course}
                            big
                        />
                    ))}
                </div>
            </div>
        </UniversalPadding>
    );
};

export default GroupLessons;
