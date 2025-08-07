require("dotenv").config();

const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/database");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// ✅ CORS Setup
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());
const path = require("path");

// ✅ Serve static files from 'uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Connect Database
connectDB();

// ✅ Routes
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const freeTrialRoutes = require("./routes/freeTrialRoutes");
const teacherRouter = require("./routes/teacherRoutes");
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/enrollments", enrollmentRoutes);
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/v1/admin", adminRoutes);

app.use("/api/v1/free-trial", freeTrialRoutes);

app.use("/api/v1/contact", contactRoutes);
app.use("/api/teachers", teacherRouter);

// ✅ Global Error Handler
app.use(globalErrorHandler);

// ✅ Start Server
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


