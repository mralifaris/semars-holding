import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

// Sections
import Header from './components/sections/Header';
import Testimonials from './components/sections/Testimonials';
import ContactUs from './components/sections/ContactUs';
import CoreValues from './components/sections/CoreValues';
import VisionMissionGoal from './components/sections/VisionMissionGoal';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="background-overlay">
          <Routes>
            <Route 
              path="/" 
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
    </Router>
  );
}

export default App;
