const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

const teacherModel =
  mongoose.models.teacher || mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;
