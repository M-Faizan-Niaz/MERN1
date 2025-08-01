const express = require("express");
const router = express.Router();
const { protect, restrictTo } = require("../middleware/authMiddleware");
const adminController = require("../controllers/adminController");

// 🔒 Protect all routes below
router.use(protect);
router.use(restrictTo("admin")); // ⛔ Only accessible by admin

// Example routes
router.get("/dashboard", adminController.getAdminDashboard);
router.get("/courses", adminController.getAllCourses);
router.delete("/courses/:id", adminController.deleteCourse);

module.exports = router;
