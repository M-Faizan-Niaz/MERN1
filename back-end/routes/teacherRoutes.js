const express = require("express");
const multer = require("multer");
const {
  addTeacher,
  listTeachers,
  removeTeacher,
} = require("../controllers/teacherController");

const teacherRouter = express.Router();

// Image storage engine for profile pictures
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
teacherRouter.post("/add", upload.single("image"), addTeacher);
teacherRouter.get("/list", listTeachers);
teacherRouter.post("/remove", removeTeacher);

module.exports = teacherRouter;
 