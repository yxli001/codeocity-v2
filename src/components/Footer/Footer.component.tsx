import React from "react";
import courses from "../../data/courses";
import DropdownLinks from "./DropdownLinks/DropdownLinks";

import styles from "./Footer.module.css";

const Footer = () => {
    const navigationLinks = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "Group Lessons",
            to: "/group-lessons",
        },
        {
            name: "Private Lessons",
            to: "/private-lessons",
        },
        {
            name: "Jobs",
            to: "/jobs",
        },
        {
            name: "Contact",
            to: "/contact",
        },
    ];

    const coursesLinks = courses.map((course) => {
        return {
            name: course.title,
            to: `/courses/${course.id}`,
        };
    });

    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.title}>Codeocity</div>
                <a
                    href="mailto:contact@codeocity.org"
                    target="_blank"
                    className={styles.email}
                    rel="noreferrer"
                >
                    contact@codeocity.org
                </a>
            </div>
            <DropdownLinks
                dropdownTitle="Navigate"
                links={navigationLinks}
                className={styles.navigate}
            />
            <DropdownLinks
                dropdownTitle="Courses"
                links={coursesLinks}
                className={styles.courses}
            />
            <div className={styles.copyright}>&copy; 2023 Codeocity</div>
        </div>
    );
};

export default Footer;
