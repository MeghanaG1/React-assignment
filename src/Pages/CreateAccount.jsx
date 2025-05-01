import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./CreateAccount.css"; 

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? (value === "yes") : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate('/account-settings', { state: formData });
  };

  return (
    <div className="form-container">
      <h2 className="title">Create your <br /> PopX account</h2>
      <br/>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
            <div className="input-label">
          <label className="label"  htmlFor="fullName">Full Name<span className="required">*</span></label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input"
            required
          />
          </div>
        </div>
        <div className="form-group">
        <div className="input-label">
          <label className="label" htmlFor="phone number">Phone number<span className="required">*</span></label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input"
            required
          />
          </div>
        </div>
        <div className="form-group">
        <div className="input-label">
          <label className="label" htmlFor="Email address">Email address<span className="required">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
          </div>
        </div>
        <div className="form-group">
        <div className="input-label">
          <label className="label" htmlFor="Password">Password <span className="required">*</span></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
          </div>
        </div>
        <div className="form-group">
        <div className="input-label">
          <label className="label" htmlFor="Company name">Company name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="input"
            required
          />
          </div>
        </div>
        <div className="form-group">
          <label className="Alabel">Are you an Agency?<span className="required">*</span></label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === true}
                onChange={handleChange}
                required
              /> Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === false}
                onChange={handleChange}
              /> No
            </label>
          </div>
        </div>
        <br/>
        <br/>
        <button type="submit" className="submit-button">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
