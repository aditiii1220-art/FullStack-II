import React from "react";
import { NavLink, useNavigate } from "react-router";

function NavBar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (onLogout) onLogout();
    navigate("/");
  };

  const storedUser = (() => {
    try {
      return JSON.parse(localStorage.getItem("studentPortalUser"));
    } catch (e) {
      return null;
    }
  })();

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

        {isAuthenticated ? (
          <>
            <span className="nav-user">
              {storedUser?.name || storedUser?.email}
            </span>
            <button className="nav-logout" onClick={handleLogoutClick}>
              Logout
            </button>
          </>
        ) : (
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
