import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    // load accounts from localStorage
    let accounts = {};
    try {
      accounts =
        JSON.parse(localStorage.getItem("studentPortalAccounts")) || {};
    } catch (e) {
      accounts = {};
    }

    const existing = accounts[form.email];

    if (existing) {
      // account exists -> validate password
      if (existing.password === form.password) {
        const user = { email: form.email, name: existing.name };
        localStorage.setItem("studentPortalLoggedIn", "true");
        localStorage.setItem("studentPortalUser", JSON.stringify(user));
        setMessage("");
        onLogin(user);
        const destination = location.state?.from || { pathname: "/dashboard" };
        navigate(destination, { replace: true });
      } else {
        setMessage("Invalid email or password.");
      }
    } else {
      // no existing account: create and save to localStorage
      const name = form.email.split("@")[0];
      accounts[form.email] = { password: form.password, name };
      try {
        localStorage.setItem("studentPortalAccounts", JSON.stringify(accounts));
      } catch (e) {
        console.warn("Could not save accounts to localStorage", e);
      }

      const user = { email: form.email, name };
      localStorage.setItem("studentPortalLoggedIn", "true");
      localStorage.setItem("studentPortalUser", JSON.stringify(user));
      setMessage("");
      onLogin(user);
      const destination = location.state?.from || { pathname: "/dashboard" };
      navigate(destination, { replace: true });
    }
  };

  return (
    <section className="login-card">
      <p className="eyebrow">Login</p>
      <h2>Access the student portal</h2>
      <p>Sign in to continue to the dashboard and view student profiles.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            placeholder="student@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            placeholder="Enter password"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Login
        </button>

        {message ? <div className="message">{message}</div> : null}
      </form>
    </section>
  );
}

export default Login;

// function login()
