import React from 'react'
import students from '../data/student'
import { Link } from 'react-router'
    function Dashboard() {
      return (
        <div>
          <h4>Dashboard </h4>
          <h6>Total Students {students.length}</h6>
          
          <Link to="/studentlist">View Student List</Link>
    </div>
  )
}

export default Dashboard