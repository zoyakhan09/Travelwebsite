import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/Component/Router/Header";
import HeroSection from "./assets/Component/Router/HeroSection";
import DestinationSection from "./assets/Component/Router/DestinationSection";
import Footer from "./assets/Component/Router/Footer";
import About from "./assets/Component/Router/About";
import Error from "./assets/Component/Router/Error";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/DestinationSection" element={<DestinationSection />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;