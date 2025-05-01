import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; 

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
        <button className="create-button" onClick={() => navigate('/create-account')}>Create Account</button>
        <button className="login-button" onClick={() => navigate('/signin')}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default WelcomePage;
