import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const MyCourses = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const [openModal, setOpenModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  // Fetch enrolled courses
  useEffect(() => {
    axios
      .get("/api/v1/enrollments/my-enrollments", { withCredentials: true })
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

  // Open modal
  const handleOpenModal = (courseId) => {
    setSelectedCourseId(courseId);
    setOpenModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedCourseId(null);
    setOpenModal(false);
  };

  // Cancel enrollment
  const confirmCancelEnrollment = () => {
    axios
      .delete(`/api/v1/enrollments/cancel/${selectedCourseId}`, {
        withCredentials: true,
      })
      .then(() => {
        setEnrollments((prev) =>
          prev.filter((e) => e.course._id !== selectedCourseId)
        );
        enqueueSnackbar("Enrollment canceled successfully.", {
          variant: "success",
        });
        handleCloseModal();
      })
      .catch(() => {
        enqueueSnackbar("Failed to cancel enrollment.", { variant: "error" });
        handleCloseModal();
      });
  };

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
        <ul className="space-y-4">
          {enrollments.map((enroll) => (
            <li
              key={enroll._id}
              className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {enroll.course?.title || "(Course Deleted)"}
              </h4>
              <p className="text-sm text-gray-600">
                <strong>Plan:</strong> {enroll.plan || "Not specified"}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Preferred Time:</strong>{" "}
                {enroll.preferredTime || "Not specified"}
              </p>
              {enroll.note && (
                <p className="text-sm text-gray-500">
                  <strong>Note:</strong> {enroll.note}
                </p>
              )}

              <button
                onClick={() => handleOpenModal(enroll.course._id)}
                className="mt-3 text-sm text-red-600 hover:text-red-800 underline"
              >
                Cancel Enrollment
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for Confirmation */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Cancel Enrollment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to cancel this course enrollment? This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="inherit">
            No
          </Button>
          <Button onClick={confirmCancelEnrollment} color="error">
            Yes, Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyCourses;
