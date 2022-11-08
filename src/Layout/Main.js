import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavHeader from "../Shared/NavHeader";

const Main = () => {
  return (
    <div>
      <NavHeader></NavHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
