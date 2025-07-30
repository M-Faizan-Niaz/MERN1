const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

// 🔓 Public Routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

// 🔐 Protected Routes (requires login)
router.use(protect);

router.get("/me", userController.getMe);
router.patch("/updateMe", userController.updateMe);

// 🔒 Admin-Only Example (Optional)
router.get("/admin-only", restrictTo("admin"), (req, res) => {
  res.status(200).json({ message: "Welcome Admin!" });
});

module.exports = router;
