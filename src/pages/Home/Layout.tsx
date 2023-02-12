import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import { Outlet } from "react-router-dom";

import "./Layout.css";
import { UniversalPadding } from "../../components/UniversalPadding/UniversalPadding.component";

const Layout = () => {
  return (
    <>
      <UniversalPadding>
        <Navbar />
      </UniversalPadding>
      <Outlet />
    </>
  );
};

export default Layout;
