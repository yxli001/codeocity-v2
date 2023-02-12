import React from "react";
import DropdownLinks from "./DropdownLinks/DropdownLinks";

import styles from "./Footer.module.css";

const Footer = () => {
    const navigationLinks = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "Courses",
            to: "/",
        },
        {
            name: "Group Lessons",
            to: "/",
        },
        {
            name: "Private Lessons",
            to: "/",
        },
        {
            name: "Contact",
            to: "/",
        },
    ];

    const coursesLinks = [
        {
            name: "Scratch",
            to: "/",
        },
        {
            name: "Web Dev 1",
            to: "/",
        },
        {
            name: "Advanced CSS",
            to: "/",
        },
        {
            name: "Intro to JavaScript",
            to: "/",
        },
        {
            name: "DOM Manipulation",
            to: "/",
        },
    ];

    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.title}>Codoecity</div>
                <p className={styles.email}>contact@codeocity.org</p>
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
