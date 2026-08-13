import React from "react";
import { Link } from "react-router";
import students from "../data/student";

function Dashboard() {
  const totalStudents = students.length;
  const activeStudents = students.filter(
    (student) => student.status === "Active",
  ).length;
  const inactiveStudents = totalStudents - activeStudents;

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
      </div>
    </section>
  );
}

export default Dashboard;
