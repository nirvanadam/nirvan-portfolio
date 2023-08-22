import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Works from "../pages/work/Works";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

function routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default routers;
