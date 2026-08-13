import React from 'react'
import {Link, Outlet} from 'react-router'
function StudentList() {
  return (
    <div>
      StudentList
      <Link to="profile" >View Profile</Link>
      <Outlet/>
    </div>
  )
}

export default StudentList