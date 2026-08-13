import React from 'react'
import students from '../data/student'
import {Link, Outlet } from 'react-router'
function Dashboard() {
  return (
    <div>
     
      <h4>DASHBOARD</h4>
      <h6>Total Students: {students.length}</h6>
    
      <Link to="studentlist">Student List</Link>
      <Outlet />
      <hr/>
    </div>
  )
}

export default Dashboard