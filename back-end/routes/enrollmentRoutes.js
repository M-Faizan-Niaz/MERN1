const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");
const { protect } = require("../middleware/authMiddleware");

// 🔐 All routes protected below
router.use(protect);

// Enroll in a course
router.post("/enroll/:courseId", enrollmentController.enrollInCourse);

// Get all enrollments for a course (ADMIN)
router.get("/course/:courseId", enrollmentController.getEnrollmentsByCourse);

// Get my own enrollments (User)
router.get("/my-enrollments", enrollmentController.getMyEnrollments);

// Cancel enrollment
router.delete("/cancel/:courseId", enrollmentController.cancelEnrollment);
const { restrictTo } = require("../middleware/authMiddleware");

// Only admin can access enrollments by course
router.get(
  "/course/:courseId",
  restrictTo("admin"),
  enrollmentController.getEnrollmentsByCourse
);


module.exports = router;
