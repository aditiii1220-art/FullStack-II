import { Link } from "react-router";
import { useMemo, useState } from "react";
import StudentForm from "../components/StudentForm";

const gradeRank = { "A+": 6, A: 5, "B+": 4, B: 3, "C+": 2, C: 1 };

function StudentList({ students, onAddStudent, onUpdateStudent, onDeleteStudent }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [courseFilter, setCourseFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [formMode, setFormMode] = useState(null);

  const courses = [...new Set(students.map((student) => student.course))].sort();
  const filteredStudents = useMemo(() => students
    .filter((student) => {
      const searchable = `${student.name} ${student.course} ${student.city}`.toLowerCase();
      return searchable.includes(search.toLowerCase()) &&
        (statusFilter === "All" || student.status === statusFilter) &&
        (courseFilter === "All" || student.course === courseFilter);
    })
    .sort((first, second) => sortBy === "name"
      ? first.name.localeCompare(second.name)
      : gradeRank[second.grade] - gradeRank[first.grade]), [students, search, statusFilter, courseFilter, sortBy]);

  const handleDelete = (student) => {
    if (window.confirm(`Delete ${student.name}'s record?`)) onDeleteStudent(student.id);
  };

  return (
    <section className="page-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Student List</p>
          <h2>All students</h2>
        </div>
        <button className="btn btn-primary" onClick={() => setFormMode("add")}>+ Add student</button>
      </div>
      <div className="toolbar">
        <input className="search-input" aria-label="Search students" placeholder="Search by name, course, or city" value={search} onChange={(event) => setSearch(event.target.value)} />
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter by status">
          <option>All</option><option>Active</option><option>Inactive</option>
        </select>
        <select value={courseFilter} onChange={(event) => setCourseFilter(event.target.value)} aria-label="Filter by course">
          <option>All</option>{courses.map((course) => <option key={course}>{course}</option>)}
        </select>
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort students">
          <option value="name">Sort: Name</option><option value="grade">Sort: Grade</option>
        </select>
      </div>
      {formMode === "add" ? <div className="form-panel"><h3>Add a student</h3><StudentForm onSubmit={(student) => { onAddStudent(student); setFormMode(null); }} onCancel={() => setFormMode(null)} /></div> : null}
      <div className="list-summary"><strong>{filteredStudents.length}</strong> of {students.length} records shown</div>
      <div className="student-grid">
        {filteredStudents.map((student) => (
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
              <button className="btn btn-secondary small" onClick={() => setFormMode(student)}>Edit</button>
            </div>
            <button className="delete-button" onClick={() => handleDelete(student)}>Delete record</button>
          </article>
        ))}
      </div>
      {!filteredStudents.length ? <div className="empty-state"><h3>No students found</h3><p>Try changing your search or filters.</p></div> : null}
      {formMode && formMode !== "add" ? <div className="modal-backdrop"><div className="modal-card"><h3>Edit student</h3><StudentForm initialStudent={formMode} onSubmit={(student) => { onUpdateStudent(student); setFormMode(null); }} onCancel={() => setFormMode(null)} /></div></div> : null}
    </section>
  );
}

export default StudentList;
