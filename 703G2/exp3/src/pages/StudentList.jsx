import React from "react";
import { Link, Outlet } from "react-router";
import students from "../data/students";

function StudentList() {
  return (
    <>
      <style>{`
        .student-container {
          min-height: 100vh;
          background: #f4f6f8;
          padding: 40px 30px;
          font-family: Arial, sans-serif;
        }

        .student-wrapper {
          max-width: 1200px;
          margin: auto;
        }

        .page-header {
          margin-bottom: 30px;
        }

        .page-header h1 {
          margin: 0;
          font-size: 30px;
          color: #111827;
        }

        .page-header p {
          margin-top: 8px;
          color: #6b7280;
          font-size: 15px;
        }

        .student-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .student-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          border: 1px solid #eef0f3;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .student-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);
        }

        .student-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .student-avatar {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .student-name {
          margin: 0;
          font-size: 19px;
          color: #111827;
        }

        .student-course {
          margin: 5px 0 0;
          color: #6b7280;
          font-size: 13px;
        }

        .student-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .info-box {
          background: #f8fafc;
          padding: 12px;
          border-radius: 10px;
        }

        .info-label {
          display: block;
          color: #9ca3af;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .info-value {
          color: #1f2937;
          font-size: 14px;
          font-weight: 600;
        }

        .status {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 20px;
          background: #dcfce7;
          color: #15803d;
          font-size: 12px;
          font-weight: 600;
        }

        .profile-link {
          display: block;
          text-align: center;
          text-decoration: none;
          background: #2563eb;
          color: white;
          padding: 11px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .profile-link:hover {
          background: #1d4ed8;
        }

        @media (max-width: 900px) {
          .student-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .student-container {
            padding: 25px 15px;
          }

          .student-grid {
            grid-template-columns: 1fr;
          }

          .page-header h1 {
            font-size: 25px;
          }
        }
      `}</style>

      <div className="student-container">
        <div className="student-wrapper">

          <div className="page-header">
            <h1>Students</h1>
            <p>Manage and view student information</p>
          </div>

          <div className="student-grid">
            {students.map((std) => (
              <div className="student-card" key={std.id}>

                <div className="student-header">
                  <div className="student-avatar">
                    {std.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h2 className="student-name">
                      {std.name}
                    </h2>

                    <p className="student-course">
                      {std.course}
                    </p>
                  </div>
                </div>

                <div className="student-info">

                  <div className="info-box">
                    <span className="info-label">
                      Age
                    </span>

                    <span className="info-value">
                      {std.age}
                    </span>
                  </div>

                  <div className="info-box">
                    <span className="info-label">
                      Grade
                    </span>

                    <span className="info-value">
                      {std.grade}
                    </span>
                  </div>

                  <div className="info-box">
                    <span className="info-label">
                      Status
                    </span>

                    <span className="status">
                      {std.status}
                    </span>
                  </div>

                  <div className="info-box">
                    <span className="info-label">
                      Phone
                    </span>

                    <span className="info-value">
                      {std.phone}
                    </span>
                  </div>

                </div>

                <Link
                  className="profile-link"
                  to={`/dashboard/profile/${std.id}`}
                >
                  View Profile →
                </Link>

              </div>
            ))}
          </div>

          <Outlet />

        </div>
      </div>
    </>
  );
}

export default StudentList;