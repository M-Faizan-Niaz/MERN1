import React, { useEffect, useState } from "react";
import axios from "axios";

const EnrollmentList = ({ url, courseId }) => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        // Construct full API endpoint dynamically
        const endpoint = courseId
          ? `${url}/api/v1/enrollments/course/${courseId}`
          : `${url}/api/v1/enrollments`;

        const res = await axios.get(endpoint, {
          withCredentials: true, // 🔐 Important for auth cookies
        });

        setEnrollments(res.data.data || []);
        setErrorMsg("");
      } catch (error) {
        console.error("❌ Failed to fetch enrollments:", error);
        setErrorMsg(
          "Failed to fetch enrollments. Please make sure you are logged in as admin."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, [url, courseId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Enrollments</h2>

      {loading ? (
        <p>Loading...</p>
      ) : errorMsg ? (
        <p className="text-red-500">{errorMsg}</p>
      ) : enrollments.length === 0 ? (
        <p>No enrollments found.</p>
      ) : (
        <ul className="space-y-4">
          {enrollments.map((enrollment) => (
            <li key={enrollment._id} className="p-4 border rounded shadow">
              <p>
                <strong>User ID:</strong> {enrollment.user}
              </p>
              <p>
                <strong>Preferred Time:</strong> {enrollment.preferredTime}
              </p>
              <p>
                <strong>Note:</strong> {enrollment.note}
              </p>
              <p>
                <strong>Plan:</strong> {enrollment.plan}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrollmentList;
