import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate in React Router v6

const WelcomePage = () => {
  const navigate = useNavigate();  // Use navigate for routing in v6

  // Handle navigation to registration page
  const handleRegisterClick = () => {
    navigate('/registration');  // Use navigate() to go to the registration page
  };

  // Handle navigation to login page
  const handleLoginClick = () => {
    navigate('/logIn');  // Use navigate() to go to the login page
  };

  return (
    <div className="home-page">
      <h1>Welcome to Wings Cave Inventory System</h1>
      <p>Please select an option below to get started:</p>
      <div className="button-container">
        <button onClick={handleRegisterClick} className="home-button">
          Register
        </button>
        <button onClick={handleLoginClick} className="home-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
