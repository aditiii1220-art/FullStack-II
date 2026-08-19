import React from "react";
import { Link } from "react-router";

function Home({ students }) {
  const activeStudents = students.filter(
    (student) => student.status === "Active",
  ).length;

  return (
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">Student Management Portal</p>
        <h1>Track students with a modern and friendly dashboard.</h1>
        <p>
          Browse the student list, open detailed profiles, and keep an eye on
          team performance in one place.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/dashboard">
            Open Dashboard
          </Link>
          <Link className="btn btn-secondary" to="/dashboard/students">
            Browse Students
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <h3>Live Overview</h3>
        <div className="stat-grid">
          <div className="mini-stat">
            <span>{students.length}</span>
            <p>Total Students</p>
          </div>
          <div className="mini-stat">
            <span>{activeStudents}</span>
            <p>Active Students</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
