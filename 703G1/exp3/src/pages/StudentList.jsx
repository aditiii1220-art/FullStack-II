import React from "react";
import { Link } from "react-router";
import students from "../data/student";

function StudentList() {
  return (
    <section className="page-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Student List</p>
          <h2>All students</h2>
        </div>
        <Link className="btn btn-secondary" to="/dashboard">
          Back to dashboard
        </Link>
      </div>
      <div className="student-grid">
        {students.map((student) => (
          <article className="student-card" key={student.id}>
            <div className="student-card-header">
              <div className="avatar">{student.name.charAt(0)}</div>
              <div>
                <h3>{student.name}</h3>
                <p>{student.course}</p>
              </div>
            </div>
            <p className="student-meta">
              Age: {student.age} • {student.city}
            </p>
            <div className="btn-row">
              <span className={`status-pill ${student.status.toLowerCase()}`}>
                {student.status}
              </span>
              <span className="grade-pill">Grade {student.grade}</span>
            </div>
            <div className="btn-row">
              <Link
                className="btn btn-primary small"
                to={`/dashboard/students/${student.id}`}
              >
                View profile
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StudentList;
