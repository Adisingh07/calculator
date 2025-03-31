import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Calculator</h2>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link></li>
          <li><Link to="/basic" onClick={() => setIsOpen(false)}>🧮 Basic Calculator</Link></li>
          <li><Link to="/advanced" onClick={() => setIsOpen(false)}>📊 Advanced Calculator</Link></li>
          <li><Link to="/unit-converter" onClick={() => setIsOpen(false)}>🔄 Unit Converter</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>ℹ️ About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>📞 Contact</Link></li>
          <li><Link to="/privacy-policy" onClick={() => setIsOpen(false)}>🔒 Privacy Policy</Link></li>
           <li><Link to="/terms-of-service" onClick={closeSidebar}>📜 Terms of Service</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
