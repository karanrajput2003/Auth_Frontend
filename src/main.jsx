import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/index.js';


import App from './App.jsx'
import Login from './pages/Login.jsx'
import TeacherRegister from './pages/TeacherRegister.jsx'
import Register from './pages/Register.jsx'
import Allcourse from './pages/Allcourse.jsx'
import Feedback from './pages/Feedback.jsx'

import Studentdashboard from './pages/Student/Studentdashboard.jsx'

import Teacherdashboard from './pages/Teacher/Teacherdashboard.jsx'

import Error from './pages/Error.jsx'

import './index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/tregister',
    element: <TeacherRegister />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/course',
    element: <Allcourse />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '/student',
    element: <Studentdashboard />,
  },
  {
    path: '/teacher',
    element: <Teacherdashboard />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider >
  </React.StrictMode>
)
