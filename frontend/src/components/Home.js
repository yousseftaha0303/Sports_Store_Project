import React from "react";
import { useAuth } from "../context/AuthContext";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <h1>Welcome to Sports Store</h1>
      {user ? (
        <div className="welcome-message">
          <h2>Hello, {user.name}!</h2>
          <p>Start shopping for your favorite sports equipment.</p>
        </div>
      ) : (
        <div className="guest-message">
          <p>Please login or register to start shopping.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
