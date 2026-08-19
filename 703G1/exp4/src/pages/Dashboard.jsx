import { Link } from "react-router";

function Dashboard({ students }) {
  const totalStudents = students.length;
  const activeStudents = students.filter(
    (student) => student.status === "Active",
  ).length;
  const inactiveStudents = totalStudents - activeStudents;
  const courses = new Set(students.map((student) => student.course)).size;
  const topStudents = students.filter((student) => ["A+", "A"].includes(student.grade)).slice(0, 4);

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
          <strong>{courses}</strong>
          <p>Courses represented</p>
        </div>
      </div>
      <div className="dashboard-lower">
        <div>
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">Academic snapshot</p>
              <h3>Top performers</h3>
            </div>
            <Link className="text-link" to="/dashboard/students">Manage records</Link>
          </div>
          <div className="quick-list">
            {topStudents.map((student) => (
              <Link className="quick-student" to={`/dashboard/students/${student.id}`} key={student.id}>
                <span className="avatar">{student.name.charAt(0)}</span>
                <span><strong>{student.name}</strong><small>{student.course} · Grade {student.grade}</small></span>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="dashboard-note">
          <span className="note-icon">✓</span>
          <div><strong>Records are saved locally</strong><p>Add or edit students from the records page. Your changes persist in this browser.</p></div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
