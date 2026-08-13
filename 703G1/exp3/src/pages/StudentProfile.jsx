import React from "react";
import { Link, useParams } from "react-router";
import students from "../data/student";

function StudentProfile() {
  const { id } = useParams();
  const student = students.find((std) => std.id === Number(id));

  if (!student) {
    return (
      <section className="page-card">
        <p>Student not found.</p>
        <Link className="btn btn-secondary" to="/dashboard/students">
          Back to students
        </Link>
      </section>
    );
  }

  return (
    <section className="page-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Student Profile</p>
          <h2>{student.name}</h2>
        </div>
        <Link className="btn btn-secondary" to="/dashboard/students">
          Back to list
        </Link>
      </div>
      <div className="profile-layout">
        <div className="profile-summary">
          <div className="avatar large">{student.name.charAt(0)}</div>
          <h3>{student.name}</h3>
          <p>{student.course}</p>
          <div className="btn-row">
            <span className={`status-pill ${student.status.toLowerCase()}`}>
              {student.status}
            </span>
            <span className="grade-pill">Grade {student.grade}</span>
          </div>
        </div>
        <div className="profile-details">
          <div className="detail-list">
            <div className="detail-item">
              <strong>Age:</strong> {student.age}
            </div>
            <div className="detail-item">
              <strong>Course:</strong> {student.course}
            </div>
            <div className="detail-item">
              <strong>City:</strong> {student.city}
            </div>
            <div className="detail-item">
              <strong>Grade:</strong> {student.grade}
            </div>
            <div className="detail-item">
              <strong>Status:</strong> {student.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentProfile;
