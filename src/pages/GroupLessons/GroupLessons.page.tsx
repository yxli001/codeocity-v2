import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard.component";
import { UniversalPadding } from "../../components/UniversalPadding/UniversalPadding.component";
import { courseTree } from "../../data/courses";

import styles from "./GroupLessons.module.css";

type Props = {};

const GroupLessons = (props: Props) => {
    return (
        <UniversalPadding>
            <div>
                <h1 className={styles.title}>Group Lessons</h1>
                <div className={styles.tree}>
                    {courseTree.map((courses, index) => (
                        <div className={styles.row} key={index}>
                            {courses.map((course) => (
                                <CourseCard
                                    course={course}
                                    key={course.id}
                                    description={course.description}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </UniversalPadding>
    );
};

export default GroupLessons;
