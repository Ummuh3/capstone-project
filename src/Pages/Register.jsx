import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration form submitted successfully!");
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-logo">
          <h2>Tech <span>4</span> Youth</h2>
          <p>Start your coding journey today!</p>
        </div>

        <h1>Create Your Account</h1>

        <p className="register-description">
          Join our community and start learning technology.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="register-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              required
            />
          </div>

          <div className="register-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          {" "}
          <Link to="/Login">Login here</Link>
        </p>

        <Link to="/" className="register-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Register;


  




