import React from "react";
import { Link } from "react-router";
import students from "../data/student";

function Dashboard() {
  const totalStudents = students.length;
  const activeStudents = students.filter(
    (student) => student.status === "Active",
  ).length;
  const inactiveStudents = totalStudents - activeStudents;
  const topStudent = students.reduce((best, current) => {
    return current.grade > best.grade ? current : best;
  }, students[0]);

  return (
    <section className="page-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h2>Student overview</h2>
        </div>
        <Link className="btn btn-primary" to="/dashboard/students">
          View all students
        </Link>
      </div>

      <div className="stat-grid">
        <div className="metric-card">
          <strong>{totalStudents}</strong>
          <p>Total Students</p>
        </div>
        <div className="metric-card">
          <strong>{activeStudents}</strong>
          <p>Active Students</p>
        </div>
        <div className="metric-card">
          <strong>{inactiveStudents}</strong>
          <p>Inactive Students</p>
        </div>
        <div className="metric-card">
          <strong>{topStudent.name}</strong>
          <p>Top Grade: {topStudent.grade}</p>
        </div>
      </div>

      <div className="hero-card" style={{ marginTop: "16px" }}>
        <h3>What you can do here</h3>
        <ul className="bullet-list">
          <li>Review a quick student summary at a glance.</li>
          <li>Open each student profile with one click.</li>
          <li>Switch smoothly between Home, Dashboard, and Login pages.</li>
        </ul>
      </div>
    </section>
  );
}

export default Dashboard;
