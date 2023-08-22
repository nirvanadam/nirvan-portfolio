import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Works from "../pages/work/Works";
import About from "../pages/about/About";

function routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default routers;
