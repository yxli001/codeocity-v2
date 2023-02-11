import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import { Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
    return (
        <>
            <div className="universal-padding">
                <Navbar />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
