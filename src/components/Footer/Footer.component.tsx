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

  const coursesLinks = [
    {
      name: "Scratch",
      to: "/courses/1",
    },
    {
      name: "Web Dev 1",
      to: "/courses/2",
    },
    {
      name: "Advanced CSS",
      to: "/courses/4",
    },
    {
      name: "Intro to JavaScript",
      to: "/courses/3",
    },
    {
      name: "DOM Manipulation",
      to: "/courses/5",
    },
  ];

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
