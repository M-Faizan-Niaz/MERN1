import React from "react";
import Navbar from "./components/sidebar/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/AddTeachers/Add";
import List from "./pages/ListTeachers/List";
import Orders from "./pages/Orders/Orders";
import AddCourse from "./pages/AddCourses/AddCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListTeachers from "./pages/ListTeachers/List";
import EnrollmentList from "./pages/enrollment/EnrollmentList";
const App = () => {
  const url = "http://localhost:5000";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add-teacher" element={<Add url={url} />} />
          <Route path="/add-course" element={<AddCourse url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/list-teachers" element={<List url={url} />} />
          <Route
            path="/enrollments"
            element={
              <EnrollmentList
                url="http://localhost:5000"
                courseId="688ce405d47fe824b61cb6fa"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
