import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    }
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>

        <p className="footer-text">
          Don't have an account? <span>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;