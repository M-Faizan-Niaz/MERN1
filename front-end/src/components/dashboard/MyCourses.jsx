import React, { useEffect, useState } from "react";
import axios from "axios";

const MyCourses = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/enrollments/my", { withCredentials: true })
      .then((res) => {
        setEnrollments(res.data.data.enrollments);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load courses.");
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        My Enrolled Courses
      </h3>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : enrollments.length === 0 ? (
        <p className="text-gray-600">No enrollments found.</p>
      ) : (
        <ul className="space-y-2">
          {enrollments.map((enroll) => (
            <li
              key={enroll._id}
              className="bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition"
            >
              {enroll.course?.title || "(Course Deleted)"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCourses;
