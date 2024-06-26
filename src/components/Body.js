import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    // <div className="flex">
    <div className="flex  space-y-3 w-full h-full  ">
      <Sidebar />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default Body;
