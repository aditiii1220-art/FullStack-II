import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.email && form.password) {
      setMessage(`Welcome back, ${form.email}!`);
    } else {
      setMessage("Please enter your email and password.");
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
