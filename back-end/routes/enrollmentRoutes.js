const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");
const { protect } = require("../middleware/authMiddleware"); // adjust path if needed

// 🔐 All routes protected below
router.use(protect);

// Enroll in a course
router.post("/enroll/:courseId", enrollmentController.enrollInCourse);

// Get my enrollments
router.get("/my-enrollments", enrollmentController.getMyEnrollments);

module.exports = router;
