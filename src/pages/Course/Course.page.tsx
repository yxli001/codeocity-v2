import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UniversalPadding } from "../../components/UniversalPadding/UniversalPadding.component";

import courses from "../../data/courses";
import { Course } from "../../data/types";
import styles from "./Course.module.css";

type Props = {};

const CoursePage = (props: Props) => {
    const { id } = useParams<{ id: string }>();
    const course: Course | undefined = courses.find(
        (e) => e.id.toString() === id
    );
    const [selectedCourse, setSelectedCourse] = useState<Course | undefined>(
        course
    );

    const handleCourseSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCourse = courses.find(
            (course) => course.title === e.target.value
        );
        setSelectedCourse(selectedCourse);
    };

    return (
        <UniversalPadding>
            <div className={styles.banner}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{course?.title}</h1>
                    <p className={styles.description}>{course?.description}</p>

                    <div className={styles.learn}>
                        <h2 className={`${styles.learnTitle} ${styles.green}`}>
                            What you'll learn:
                        </h2>
                        <div className={styles.learnItems}>
                            {course?.content.map((item) => (
                                <div className={styles.learnItem} key={item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <h1 className={styles.formTitle}>Enroll</h1>
                    <form
                        className={styles.form}
                        action="https://getform.io/f/6b9e6618-ba03-4109-a20b-10e0a4718bb2"
                        method="POST"
                    >
                        <div className={styles.information}>
                            <p>
                                Class size will be limited to
                                <span className={styles.green}> five</span>{" "}
                                students. Total of
                                <span className={styles.green}>
                                    {" "}
                                    {course?.numClasses}
                                </span>{" "}
                                online classes, twice a week. Total cost is:{" "}
                                <span className={styles.green}>
                                    ${course?.price}
                                </span>{" "}
                                - $25/hour. Classes start the week of{" "}
                                <span className={styles.green}>
                                    {course?.startsOn}!
                                </span>
                            </p>
                        </div>

                        <div className={styles.formSection}>
                            <p className={styles.label}>Name</p>
                            <input
                                type="text"
                                name="name"
                                className={styles.textInput}
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className={styles.formSection}>
                            <p className={styles.label}>Email</p>
                            <input
                                type="text"
                                name="email"
                                className={styles.textInput}
                                placeholder="Ex. example@gmail.com"
                                required
                            />
                        </div>
                        <div className={styles.formSection}>
                            <p className={styles.label}>Course</p>
                            <div className={styles.selectWrapper}>
                                <select
                                    name="course"
                                    className={styles.selectInput}
                                    onChange={handleCourseSelect}
                                    value={selectedCourse?.title}
                                    required
                                >
                                    {courses.map((course) => (
                                        <option
                                            value={course.title}
                                            key={course.id}
                                        >
                                            {course.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.formSection}>
                            <p className={styles.label}>Preferred timeslot</p>
                            <div className={styles.selectWrapper}>
                                <select
                                    name="times"
                                    className={styles.selectInput}
                                    required
                                >
                                    {selectedCourse?.times.map((time) => (
                                        <option value={time} key={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.formSection}>
                            <p className={styles.label}>Anything else?</p>
                            <textarea
                                className={`${styles.textInput} ${styles.textarea}`}
                                placeholder="Message..."
                                required
                                name="message"
                            ></textarea>
                        </div>
                        <div className={styles.formSection}>
                            <button className={styles.submitButton}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {course?.projects.length === 2 && (
                <h2 className={`${styles.learnTitle} ${styles.green}`}>
                    Projects students have built:
                </h2>
            )}
            <UniversalPadding>
                {course?.projects.length === 2 &&
                    course?.projects.map((project) => (
                        // Map an i frame with the project
                        <a
                            href={project}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.link}
                            key={project}
                        >
                            <iframe
                                src={project}
                                width="100%"
                                height="400px"
                                title="Project"
                            />
                            <p className={styles.link}>Link</p>
                        </a>
                    ))}
            </UniversalPadding>
        </UniversalPadding>
    );
};

export default CoursePage;
