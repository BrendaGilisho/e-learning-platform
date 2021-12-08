import React from "react";
// import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/Sign-up/sign-up'
import LogIn from './pages/Login/Login'

import AllCourses from "./pages/AllCourses/AllCourses";
import Course from "./pages/Course/Course";

import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import JoinRoom from './pages/JoinRoom/JoinRoom'
import ChatRoom from "./pages/ChatRoom/ChatRoom";

function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/Login' element={<LogIn/>} />

          <Route path='AllCourses' element={<AllCourses/>} />
          <Route path='Course' element={<Course/>} />
          <Route path='Dashboard' element={<Dashboard/>} />

          <Route path='JoinRoom' element={<JoinRoom/>} />
          <Route path='ChatRoom' element={<ChatRoom/>} />




      </Routes>

      < Footer />

    </Router>
    
  );
}

export default App;
