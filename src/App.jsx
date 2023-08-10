import React from "react";
import "tailwindcss/tailwind.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/AboutUs";
import Products from "./components/Products";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
