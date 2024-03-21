import React from "react";
import Landing from "./Landing";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Home;
