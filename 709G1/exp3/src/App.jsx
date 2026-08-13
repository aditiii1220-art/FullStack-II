import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import StudentList from './pages/StudentList'
import StudentProfile from './pages/StudentProfile'
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} >
          <Route path='studentlist' element={<StudentList />} >
            <Route path="profile" element={<StudentProfile />} />
            </Route>
    </Route>

        /* 1./dashboard
        2./dashboard/studentlist
        3/dashbord/studenlist /profile */


        <Route path='/login' element={<Login />} />
        

      </Routes>
    </>
   

  )
}

export default App

11348
796
11276