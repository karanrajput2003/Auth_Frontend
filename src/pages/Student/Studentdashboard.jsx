import React, { useEffect, useState } from 'react'
import StudentNavbar from '../../components/Student/StudentNavbar';
import {useNavigate} from 'react-router-dom'

import Homecontent from '../../components/Homecontent';
import axios from 'axios';
axios.defaults.withCredentials = true;


function Studentdashboard() {
  return (
    <>

      <StudentNavbar />
      {/* {user && <h1>{user.username}</h1>} */}
      <Homecontent title="Explore Courses" link="/student/course"/>

    </>
  )
}

export default Studentdashboard