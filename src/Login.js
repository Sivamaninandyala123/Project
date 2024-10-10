import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import './Login.css';  // Link to custom CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login functionality here
  };

  const handleClose = () => {
    navigate('/');  // Redirect to home or another page on close
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');  // Navigate to reset password page
  };

  return (
    <div className="login-container">
      <div className="form-header">
        <div className="logo-section">
          
          <h2 className="logo-text">FINALLE</h2>
        </div>
        <button className="close-button" onClick={handleClose}>X</button>
      </div>

      <div className="form-body">
        <h1>Welcome back</h1>
        <p>Login to your account</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <p className="forgot-password">
            Forgot password? <span className="reset-link" onClick={handleForgotPassword}>Reset</span>
          </p>

          <button type="submit" className="login-button">Login</button>

          <p className="or-text">OR</p>

          <p className="signup-text">
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
