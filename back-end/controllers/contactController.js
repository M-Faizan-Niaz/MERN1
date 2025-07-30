const Contact = require("../models/contactModel");
const catchAsync = require("../utils/catchAsync");

exports.submitContactForm = catchAsync(async (req, res) => {
  const { name, email, phone, country, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    phone,
    country,
    message,
  });

  res.status(201).json({
    status: "success",
    data: { contact },
  });
});
