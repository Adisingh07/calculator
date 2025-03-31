import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close Sidebar when a link is clicked
  const closeSidebar = () => setIsOpen(false);

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Calculator</h2>
        <ul>
          <li><Link to="/" onClick={closeSidebar}>🏠 Home</Link></li>
          <li><Link to="/basic" onClick={closeSidebar}>🧮 Basic Calculator</Link></li>
          <li><Link to="/advanced" onClick={closeSidebar}>📊 Advanced Calculator</Link></li>
          <li><Link to="/unit-converter" onClick={closeSidebar}>🔄 Unit Converter</Link></li>
          <li><Link to="/buy" onClick={closeSidebar}>🛒 Buy PDFs</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>ℹ️ About</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>📞 Contact</Link></li>
          <li><Link to="/privacy-policy" onClick={closeSidebar}>🔒 Privacy Policy</Link></li>
          <li><Link to="/terms-of-service" onClick={closeSidebar}>📜 Terms of Service</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
