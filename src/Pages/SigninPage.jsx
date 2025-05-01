import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SigninPage.css'; // Assuming your CSS file is SigninPage.css

const SignIn = () => {
   const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    console.log('Logging in with:', { email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signin-container">
     <h2 className="signin-title">
        Signin to your
        <br />PopX account</h2>
      
      <p className="signin-subtitle">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      <br/>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
        <div className="input-label">
          <label className="label" htmlFor="Password">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
             placeholder="Enter email address"
            onChange={handleEmailChange}
            className="input-field"
          />
          </div>
        </div>

        <div className="form-group">
        <div className="input-label">
          <label className="label" htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handlePasswordChange}
            className="input-field"
            required
          />
          </div>
        </div>
        <button type="submit" className="login-button"  onClick={() => navigate('/account-settings')}>Login</button>
      </form>
    </div>
  );
};

export default SignIn;