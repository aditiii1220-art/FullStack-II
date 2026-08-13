import React from "react";
import { useNavigate, useParams } from "react-router";
import students from "../data/students";

function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((std) => std.id === Number(id));

  if (!student) {
    return (
      <>
        <style>{`
          .not-found {
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
          }

          .not-found h2 {
            color: #333;
            margin-bottom: 10px;
          }

          .back-btn {
            padding: 10px 18px;
            border: none;
            border-radius: 8px;
            background: #2563eb;
            color: white;
            cursor: pointer;
            font-size: 14px;
          }
        `}</style>

        <div className="not-found">
          <h2>Student Not Found</h2>
          <p>No student exists with ID {id}</p>
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .profile-container {
          min-height: 100vh;
          background: #f4f6f8;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .profile-wrapper {
          max-width: 900px;
          margin: auto;
        }

        .back-button {
          border: none;
          background: transparent;
          color: #2563eb;
          font-size: 15px;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .profile-card {
          background: white;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 25px;
          border-bottom: 1px solid #e5e7eb;
        }

        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bold;
        }

        .header-info h1 {
          margin: 0 0 6px;
          font-size: 28px;
          color: #111827;
        }

        .header-info p {
          margin: 0;
          color: #6b7280;
        }

        .status {
          display: inline-block;
          margin-top: 10px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          background: #dcfce7;
          color: #15803d;
        }

        .details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .detail-item {
          padding: 18px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #eef2f7;
        }

        .detail-label {
          display: block;
          color: #6b7280;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .detail-value {
          color: #111827;
          font-size: 16px;
          font-weight: 600;
        }

        .address {
          grid-column: span 2;
        }

        @media (max-width: 600px) {
          .profile-container {
            padding: 20px 12px;
          }

          .profile-card {
            padding: 20px;
          }

          .profile-header {
            align-items: flex-start;
          }

          .avatar {
            width: 60px;
            height: 60px;
            font-size: 22px;
          }

          .header-info h1 {
            font-size: 22px;
          }

          .details {
            grid-template-columns: 1fr;
          }

          .address {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="profile-container">
        <div className="profile-wrapper">

          <button className="back-button" onClick={() => navigate(-1)}>
            ← Back to Students
          </button>

          <div className="profile-card">

            <div className="profile-header">
              <div className="avatar">
                {student.name.charAt(0).toUpperCase()}
              </div>

              <div className="header-info">
                <h1>{student.name}</h1>
                <p>{student.course}</p>

                <span className="status">
                  {student.status}
                </span>
              </div>
            </div>

            <div className="details">

              <div className="detail-item">
                <span className="detail-label">Age</span>
                <span className="detail-value">
                  {student.age}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Grade</span>
                <span className="detail-value">
                  {student.grade}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">
                  {student.email}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">
                  {student.phone}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Course</span>
                <span className="detail-value">
                  {student.course}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-value">
                  {student.status}
                </span>
              </div>

              <div className="detail-item address">
                <span className="detail-label">Address</span>
                <span className="detail-value">
                  {student.address}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;