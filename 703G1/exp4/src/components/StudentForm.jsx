import { useState } from "react";

const emptyStudent = {
  name: "",
  age: "",
  course: "BCA",
  grade: "A",
  city: "",
  status: "Active",
};

function StudentForm({ initialStudent, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialStudent || emptyStudent);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...form, age: Number(form.age) });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" required value={form.name} onChange={updateField} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" min="16" max="80" required value={form.age} onChange={updateField} />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <select id="course" name="course" value={form.course} onChange={updateField}>
            <option>BCA</option>
            <option>B.Tech</option>
            <option>MCA</option>
            <option>B.Sc</option>
            <option>MBA</option>
            <option>B.Com</option>
            <option>BBA</option>
            <option>M.Tech</option>
            <option>M.Sc</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade</label>
          <select id="grade" name="grade" value={form.grade} onChange={updateField}>
            <option>A+</option>
            <option>A</option>
            <option>B+</option>
            <option>B</option>
            <option>C+</option>
            <option>C</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input id="city" name="city" required value={form.city} onChange={updateField} />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={form.status} onChange={updateField}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
      <div className="btn-row">
        <button className="btn btn-primary" type="submit">Save student</button>
        <button className="btn btn-secondary" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default StudentForm;