import React, { useEffect, useState } from "react";
import axios from "axios";

const AvailableCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/courses")
      .then((res) => setCourses(res.data.data.courses))
      .catch((err) => console.error(err));
  }, []);

  const enroll = (id) => {
    axios
      .post(`/api/v1/enrollments/${id}`, {}, { withCredentials: true })
      .then(() => alert("Enrolled successfully!"))
      .catch(() => alert("Enrollment failed."));
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-2">Available Courses</h3>
      {courses.length === 0 ? (
        <p>No courses yet.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course._id} className="mb-2">
              <span>{course.title}</span>
              <button
                className="ml-4 text-sm text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                onClick={() => enroll(course._id)}
              >
                Enroll
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailableCourses;
