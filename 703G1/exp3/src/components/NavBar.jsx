import React from "react";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <header className="navbar">
      <div className="brand">Student Portal</div>
      <nav className="nav-links">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to="/login"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
