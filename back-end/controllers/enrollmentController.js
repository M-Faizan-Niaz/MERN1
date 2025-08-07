const Enrollment = require("../models/enrollmentModel");
const catchAsync = require("../utils/catchAsync");

exports.enrollInCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { preferredTime, note, plan } = req.body; // ✅ include `plan`

  // Check if already enrolled
  const existing = await Enrollment.findOne({
    user: req.user.id,
    course: courseId,
  });

  if (existing) {
    return res.status(400).json({
      status: "fail",
      message: "You are already enrolled in this course",
    });
  }

  // Create new enrollment
  const enrollment = await Enrollment.create({
    user: req.user.id,
    course: courseId,
    preferredTime,
    note,
    plan, // ✅ store selected plan
  });

  res.status(201).json({
    status: "success",
    data: { enrollment },
  });
});
exports.getEnrollmentsByCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const enrollments = await Enrollment.find({ course: courseId });

  res.status(200).json({
    success: true,
    data: enrollments,
  });
});


exports.getMyEnrollments = catchAsync(async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user.id }).populate(
    "course"
  );

  res.status(200).json({
    status: "success",
    results: enrollments.length,
    data: { enrollments },
  });
});

// Cancel Enrollment
exports.cancelEnrollment = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const enrollment = await Enrollment.findOneAndDelete({
    user: req.user.id,
    course: courseId,
  });

  if (!enrollment) {
    return res.status(404).json({
      status: "fail",
      message: "Enrollment not found or already canceled",
    });
  }

  res.status(204).json({ status: "success", data: null });
});
