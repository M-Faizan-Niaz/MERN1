// File: controllers/adminController.js
const User = require("../models/userModel");
const Course = require("../models/courseModel");
const Enrollment = require("../models/enrollmentModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// Admin Dashboard Overview
exports.getAdminDashboard = catchAsync(async (req, res) => {
  const usersCount = await User.countDocuments();
  const coursesCount = await Course.countDocuments();
  const enrollmentsCount = await Enrollment.countDocuments();

  res.status(200).json({
    status: "success",
    data: {
      usersCount,
      coursesCount,
      enrollmentsCount,
    },
  });
});

// Get All Users
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ status: "success", data: { users } });
});

// Delete a User
exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return next(new AppError("User not found", 404));
  res.status(204).json({ status: "success", data: null });
});

// Get All Courses
exports.getAllCourses = catchAsync(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({ status: "success", data: { courses } });
});

// Delete a Course
exports.deleteCourse = catchAsync(async (req, res, next) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return next(new AppError("Course not found", 404));
  res.status(204).json({ status: "success", data: null });
});

// View All Enrollments
exports.getAllEnrollments = catchAsync(async (req, res) => {
  const enrollments = await Enrollment.find().populate("user course");
  res.status(200).json({ status: "success", data: { enrollments } });
});
