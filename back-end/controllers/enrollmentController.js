const Enrollment = require("../models/enrollmentModel");
const catchAsync = require("../utils/catchAsync");

exports.enrollInCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params; // ✅ move this to the top

  // 🔁 Check if already enrolled
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

  // ✅ Proceed to enroll
  const enrollment = await Enrollment.create({
    user: req.user.id,
    course: courseId,
  });

  res.status(201).json({ status: "success", data: { enrollment } });
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
