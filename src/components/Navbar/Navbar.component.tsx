import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowDimensions from "../../utils/Dimensions.utils.js";

const Navbar = () => {
    const [displayNavbar, setDisplayNavbar] = useState(false);
    const { height, width } = useWindowDimensions();

    return (
        <div className={style.container}>
            <div className={style.upperRow}>
                <Link className={`${style.logo}`} to="/">
                    Codeocity
                </Link>
                <div
                    className={style.burger}
                    onClick={() => {
                        setDisplayNavbar(!displayNavbar);
                        // handle animation
                    }}
                >
                    <div className={style.line1}></div>
                    <div className={style.line2}></div>
                    <div className={style.line3}></div>
                </div>
            </div>
            {width > 825 || displayNavbar ? (
                <div className={`${style.linksContainer}`}>
                    <Link className={style.link} to="/">
                        Home
                    </Link>
                    <Link className={style.link} to="/group-lessons">
                        Group Lessons
                    </Link>
                    <Link className={style.link} to="/private-lessons">
                        Private Lessons
                    </Link>
                    <Link className={style.link} to="/contact">
                        Contact
                    </Link>
                </div>
            ) : null}
        </div>
    );
};

export default Navbar;
