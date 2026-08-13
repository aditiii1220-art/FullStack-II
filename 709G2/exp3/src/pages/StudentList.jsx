import React from 'react'
import students from '../data/student'
import { Link } from 'react-router'
function StudentList() {
  return (
    <div>
      <h4>StudentList</h4>
      {students.map((std, index) => (
        <div>
          <h6>{std.name}
            <Link to="/viewprofile">View Profile</Link>
          </h6>
      </div>
    ))}
    
    
    
    
    </div>
  )
}

export default StudentList