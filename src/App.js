import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BasicCalculator from "./components/BasicCalculator";
import AdvancedCalculator from "./components/AdvancedCalculator";
import UnitConverter from "./components/UnitConverter";
import "./App.css";
import About from "./pages/About"; 
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs"; 
import { Pi } from "@pinetwork-js/sdk"; // ✅ Correct import

function App() {
  useEffect(() => {
    if (Pi) {
      Pi.init({
        version: "2.0",
        sandbox: true, // Change to false for production
      });
      console.log("Pi SDK Initialized Successfully!");
    } else {
      console.error("Pi SDK not found!");
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic" element={<BasicCalculator />} />
            <Route path="/advanced" element={<AdvancedCalculator />} />
            <Route path="/unit-converter" element={<UnitConverter />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
