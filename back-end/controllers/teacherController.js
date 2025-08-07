const teacherModel = require("../models/teacherModel");
const fs = require("fs");
const path = require("path");

// ✅ Add Teacher
const addTeacher = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const image_filename = req.file.filename;

    const teacher = new teacherModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
      category: req.body.category,
      image: image_filename,
    });

    await teacher.save();

    res.status(201).json({
      success: true,
      message: "Teacher added successfully",
    });
  } catch (error) {
    console.error("Error in addTeacher:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to add teacher",
      error: error.message,
    });
  }
};

// ✅ List Teachers
const listTeachers = async (req, res) => {
  try {
    const teachers = await teacherModel.find({});
    res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    console.error("Error in listTeachers:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch teachers",
      error: error.message,
    });
  }
};

// ✅ Remove Teacher
const removeTeacher = async (req, res) => {
  try {
    const teacher = await teacherModel.findById(req.body.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    // Delete image if it exists
    if (teacher.image) {
      const imagePath = path.join(__dirname, "..", "uploads", teacher.image);
      fs.unlink(imagePath, (err) => {
        if (err) console.warn("Failed to delete image file:", err.message);
      });
    }

    await teacherModel.findByIdAndDelete(req.body.id);

    res.status(200).json({
      success: true,
      message: "Teacher removed successfully",
    });
  } catch (error) {
    console.error("Error in removeTeacher:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to remove teacher",
      error: error.message,
    });
  }
};

module.exports = { addTeacher, listTeachers, removeTeacher };
