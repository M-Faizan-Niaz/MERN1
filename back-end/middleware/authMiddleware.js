const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// PROTECT middleware
exports.protect = catchAsync(async (req, res, next) => {
  let token;

  // Check token in headers or cookie
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) return next(new AppError("You are not logged in!", 401));

  // Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) return next(new AppError("User no longer exists", 401));

  // Check if password changed after token
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("Password recently changed, please login again", 401)
    );
  }

  req.user = currentUser;
  next();
});

// RESTRICT TO specific roles
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You are not allowed to perform this action", 403)
      );
    }
    next();
  };
};
