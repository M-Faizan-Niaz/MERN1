const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: "Course",
    required: true,
  },
  plan: {
    type: String,
    enum: [
      "2 Classes / Week",
      "3 Classes / Week",
      "4 Classes / Week",
      "5 Classes / Week",
    ],
  },

  preferredTime: {
    type: String,
  },
  note: {
    type: String,
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

enrollmentSchema.pre(/^find/, function (next) {
  this.populate("course").populate("user");
  next();
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
