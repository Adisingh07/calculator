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
import TermsOfService from "./pages/TermsOfService";
import Buy from "./pages/Buy";
import { Pi } from "@pinetwork-js/sdk"; // ✅ Correct Import

function App() {
  useEffect(() => {
    async function initPi() {
      try {
        if (!Pi || !Pi.init) {
          console.error("❌ Pi SDK is not properly imported.");
          return;
        }

        // Initialize Pi SDK
       Pi.init({
         version: "2.0",
         sandbox: process.env.NODE_ENV !== 'production' // true for development
       });

        console.log("✅ Pi SDK Initialized:", Pi);
      } catch (error) {
        console.error("❌ Error initializing Pi SDK:", error);
      }
    }

    initPi();
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
            <Route path="/buy" element={<Buy />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
