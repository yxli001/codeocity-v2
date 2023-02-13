import React from "react";
import Navbar from "./components/Navbar/Navbar.component";
import { Outlet } from "react-router-dom";

import "./Layout.css";
import { UniversalPadding } from "./components/UniversalPadding/UniversalPadding.component";
import Footer from "./components/Footer/Footer.component";

const Layout = () => {
    return (
        <>
            <UniversalPadding>
                <Navbar />
            </UniversalPadding>
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
