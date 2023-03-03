import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import useWindowDimensions from "../../utils/Dimensions.utils.js";

const Navbar = () => {
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const { width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setDisplayNavbar(!displayNavbar);
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.upperRow}>
        <Link
          className={`${style.logo}`}
          to="/"
          onClick={() => {
            setDisplayNavbar(!displayNavbar);
            setIsOpen(!isOpen);
          }}
        >
          Codeocity
        </Link>
        <div
          className={`${style.burgerMenu} ${isOpen ? style.change : ""}`}
          onClick={handleClick}
        >
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
        </div>
      </div>
      <div
        className={`${style.linksContainer} ${
          width < 825 && displayNavbar
            ? style.inDisplay
            : width < 825
            ? style.outDisplay
            : null
        }`}
      >
        <Link
          className={style.link}
          to="/"
          onClick={() => {
            setDisplayNavbar(!displayNavbar);
            setIsOpen(!isOpen);
          }}
        >
          Home
        </Link>
        <Link
          className={style.link}
          to="/group-lessons"
          onClick={() => {
            setDisplayNavbar(!displayNavbar);
            setIsOpen(!isOpen);
          }}
        >
          Group Lessons
        </Link>
        <Link
          className={style.link}
          to="/private-lessons"
          onClick={() => {
            setDisplayNavbar(!displayNavbar);
            setIsOpen(!isOpen);
          }}
        >
          Private Lessons
        </Link>
        <Link
          className={style.link}
          to="/jobs"
          onClick={() => {
            setDisplayNavbar(!displayNavbar);
            setIsOpen(!isOpen);
          }}
        >
          Jobs
        </Link>
        <Link
          className={style.link}
          to="/contact"
          onClick={() => {
            setDisplayNavbar(!displayNavbar);
            setIsOpen(!isOpen);
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
