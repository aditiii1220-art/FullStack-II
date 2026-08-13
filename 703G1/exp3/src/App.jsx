import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentList from "./pages/StudentList";
import StudentProfile from "./pages/StudentProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("studentPortalLoggedIn") === "true",
  );

  const handleLogin = (user) => {
    localStorage.setItem("studentPortalLoggedIn", "true");
    localStorage.setItem("studentPortalUser", JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("studentPortalLoggedIn");
    localStorage.removeItem("studentPortalUser");
    setIsAuthenticated(false);
  };

  return (
    <div className="app-shell">
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/students" element={<StudentList />} />
            <Route
              path="/dashboard/students/:id"
              element={<StudentProfile />}
            />
          </Route>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
