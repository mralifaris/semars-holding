import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

// Sections
import Header from "./components/sections/Header";
import Testimonials from "./components/sections/Testimonials";
import ContactUs from "./components/sections/ContactUs";
import CoreValues from "./components/sections/CoreValues";
import VisionMissionGoal from "./components/sections/VisionMissionGoal";
import WhySemars from "./components/sections/WhySemars";
import ProcessSection from "./components/sections/ProcessSection";
import HeaderHome from "./components/sections/HeaderHome";
import Services from "./components/sections/Services.js";

import "./App.css";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about-us") {
      document.body.className = "about-page";
    } else {
      document.body.className = "home-page";
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <div className="background-overlay">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeaderHome/>
                <WhySemars />
                <Services/>
                <ProcessSection />
              </>
            } 
          />
          <Route 
            path="/about-us" 
            element={
              <>
                <Header />
                <VisionMissionGoal />
                <CoreValues />
                <Testimonials />
                <ContactUs />
              </>
            } 
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
