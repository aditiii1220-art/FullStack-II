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
import studentsData from "./data/student";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("studentPortalLoggedIn") === "true",
  );
  const [students, setStudents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("studentPortalStudents")) || studentsData;
    } catch {
      return studentsData;
    }
  });

  useEffect(() => {
    localStorage.setItem("studentPortalStudents", JSON.stringify(students));
  }, [students]);

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

  const addStudent = (student) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      { ...student, id: Date.now() },
    ]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student,
      ),
    );
  };

  const deleteStudent = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== studentId),
    );
  };

  return (
    <div className="app-shell">
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<Dashboard students={students} />} />
            <Route
              path="/dashboard/students"
              element={
                <StudentList
                  students={students}
                  onAddStudent={addStudent}
                  onUpdateStudent={updateStudent}
                  onDeleteStudent={deleteStudent}
                />
              }
            />
            <Route
              path="/dashboard/students/:id"
              element={
                <StudentProfile
                  students={students}
                  onUpdateStudent={updateStudent}
                  onDeleteStudent={deleteStudent}
                />
              }
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
