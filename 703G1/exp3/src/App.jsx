import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentList from "./pages/StudentList";
import StudentProfile from "./pages/StudentProfile";

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/students" element={<StudentList />} />
          <Route path="/dashboard/students/:id" element={<StudentProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
