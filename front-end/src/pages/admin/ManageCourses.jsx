import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/courses")
      .then((res) => setCourses(res.data.data.courses));
  }, []);

  const deleteCourse = (id) => {
    axios.delete(`/api/v1/courses/${id}`).then(() => {
      setCourses((prev) => prev.filter((course) => course._id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} className="border-b">
              <td className="p-2">{course.title}</td>
              <td className="p-2 space-x-2">
                <button className="text-blue-500">Edit</button>
                <button
                  onClick={() => deleteCourse(course._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;
