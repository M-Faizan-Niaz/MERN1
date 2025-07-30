const FreeTrial = require("../models/freeTrialModel");
const catchAsync = require("../utils/catchAsync");

exports.bookFreeTrial = catchAsync(async (req, res) => {
  const newTrial = await FreeTrial.create(req.body);
  res.status(201).json({
    status: "success",
    message: "Free trial request submitted successfully",
    data: newTrial,
  });
});
