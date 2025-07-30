const mongoose = require("mongoose");

const freeTrialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  course: { type: String, required: true },
  timeZone: { type: String, required: true },
  country: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FreeTrial", freeTrialSchema);
