import React, { useState } from "react";
import { Pi } from "@pinetwork-js/sdk";
import "./Home.css"; // Ensure you have styles for a better UI

const Home = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      if (!Pi) {
        console.error("Pi SDK is not loaded.");
        return;
      }

      // Pi Authentication Request
      const scopes = ["username", "payments"];
      Pi.authenticate(scopes, (result) => {
        if (result.user) {
          setUser(result.user);
          console.log("User signed in:", result.user);
        } else {
          console.error("Authentication failed", result);
        }
      });
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to Aditya's Calculator & Converter App</h1>
      <p>Your all-in-one tool for calculations, conversions, and Pi transactions.</p>
      
      {!user ? (
        <button className="sign-in-btn" onClick={handleSignIn}>
          Sign in with Pi
        </button>
      ) : (
        <div className="user-info">
          <h3>Welcome, {user.username}!</h3>
          <p>You're signed in using Pi Network.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
