require("dotenv").config();

const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/database");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors");

const app = express();

const PORT = config.port;
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend server" });
});

// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`POS Server is listening on port ${PORT}`);
});
