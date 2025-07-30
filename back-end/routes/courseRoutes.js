const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const authController = require("../middleware/authMiddleware");

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    courseController.createCourse
  );

module.exports = router;
