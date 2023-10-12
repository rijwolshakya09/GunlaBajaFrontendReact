import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/dashboard/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
