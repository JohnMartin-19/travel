import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="signin-page">
      <div className="form-container">
        <h1>Welcome Back, Adventurer!</h1>
        <p className="subtext">Sign in to continue your journey with Young Boundless Nomads Adventures.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="signup-link">Don't have an account? <Link to="/sign-up" >Register</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
