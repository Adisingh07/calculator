import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatusMessage("Sending...");
    
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      setStatusMessage("Error connecting to server.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Fill out the form below!</p>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Send Message</button>
      </form>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default ContactUs;
