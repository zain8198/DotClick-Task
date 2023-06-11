import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CurrentRequest, OngoingStay, PreviousStay, Report } from "../pages";
import Navbar from "../components/Navbar/Navbar";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CurrentRequest />} />
          <Route path="/ongoingstay" element={<OngoingStay />} />
          <Route path="/previousstay" element={<PreviousStay />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
