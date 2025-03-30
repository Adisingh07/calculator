import React from "react";
import "./About.css"; // Ensure you create a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the **Advanced Calculator App** – a powerful, feature-rich tool designed to meet all your calculation needs. Whether you're performing **basic arithmetic**, **scientific calculations**, or **unit conversions**, our app provides an intuitive and seamless experience.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our goal is to build a **user-friendly and efficient** calculator that not only simplifies complex calculations but also enhances productivity with features like a **history log, keyboard shortcuts, and theme customization**.
      </p>

      <h2>About the Developer</h2>
      <p>
        **Aditya**, the creator of this project, is a passionate software developer who enjoys building interactive and efficient web applications. With a strong background in **JavaScript, React, and UI/UX design**, Aditya aims to create tools that are both functional and visually appealing.
      </p>

      <h2>Key Features of This App</h2>
      <ul>
        <li>📌 **Basic & Advanced Calculator** with scientific functions</li>
        <li>📌 **Unit Converter** (Length, Weight, Temperature, etc.)</li>
        <li>📌 **Theme Toggle** (Light & Dark Mode)</li>
        <li>📌 **History Feature** to keep track of calculations</li>
        <li>📌 **Responsive Design** for seamless mobile experience</li>
        <li>📌 **Smooth Sidebar Navigation** with easy access</li>
      </ul>

      <h2>Get in Touch</h2>
      <p>
        Have feedback or suggestions? Feel free to reach out and help us improve! 🚀
      </p>
    </div>
  );
};

export default About;
