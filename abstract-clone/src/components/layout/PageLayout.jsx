import React from "react";
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

function PageLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageLayout;
