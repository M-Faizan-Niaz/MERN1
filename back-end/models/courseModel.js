const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: String,
  rating: {
    type: Number,
    default: 5,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Course", courseSchema);
