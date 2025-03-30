import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Ultimate Calculator & Converter!</h1>
      <p>
        This web app provides a **powerful set of tools** including a **Basic Calculator, Advanced Calculator, and Unit Converter**.  
        Whether you need **quick calculations**, **scientific functions**, or **unit conversions**, we’ve got you covered!
      </p>
      <p>
        Start by selecting a feature from the **sidebar menu** or use the buttons below:
      </p>
      <div className="home-buttons">
        <a href="/basic" className="home-btn">🧮 Basic Calculator</a>
        <a href="/advanced" className="home-btn">📊 Advanced Calculator</a>
        <a href="/unit-converter" className="home-btn">🔄 Unit Converter</a>
      </div>
    </div>
  );
};

export default Home;
