import React, { useEffect, useState } from "react";
import axios from "axios";
import EnrollmentModal from "./EnrollmentModal";

const AvailableCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/courses")
      .then((res) => setCourses(res.data.data.courses))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Available Courses</h3>

      {courses.length === 0 ? (
        <p>No courses yet.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li
              key={course._id}
              className="mb-3 flex justify-between items-center"
            >
              <span>{course.title}</span>
              <button
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                onClick={() => setSelectedCourseId(course._id)}
              >
                Enroll
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      {selectedCourseId && (
        <EnrollmentModal
          courseId={selectedCourseId}
          onClose={() => setSelectedCourseId(null)}
          onSuccess={() => console.log("Enrollment saved")}
        />
      )}
    </div>
  );
};

export default AvailableCourses;
