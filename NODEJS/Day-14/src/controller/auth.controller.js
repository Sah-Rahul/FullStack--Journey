const User = require("../models/user.model");
const Token = require("../models/token.model");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcryptjs");

// Register user + send verification email
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword, isVerified: false });

  // Generate OTP token
  const tokenString = crypto.randomBytes(32).toString("hex");
  await Token.create({ userId: user._id, token: tokenString });

  // Send verification email
  const url = `${process.env.CLIENT_URL}/verify/${user._id}/${tokenString}`;
  await sendEmail({ to: user.email, subject: "Verify your email", html: `<p>Click <a href="${url}">here</a> to verify your account</p>` });

  res.status(201).json({ message: "Registration successful. Check your email to verify." });
};

// Verify Email
exports.verifyEmail = async (req, res) => {
  const { userId, token } = req.params;
  const tokenDoc = await Token.findOne({ userId, token });
  if (!tokenDoc) return res.status(400).json({ message: "Invalid or expired token" });

  await User.findByIdAndUpdate(userId, { isVerified: true });
  await Token.findByIdAndDelete(tokenDoc._id);

  res.json({ message: "Email verified successfully" });
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const tokenString = crypto.randomBytes(32).toString("hex");
  await Token.create({ userId: user._id, token: tokenString });

  const url = `${process.env.CLIENT_URL}/reset-password/${user._id}/${tokenString}`;
  await sendEmail({ to: user.email, subject: "Reset Password", html: `<p>Click <a href="${url}">here</a> to reset your password</p>` });

  res.json({ message: "Password reset link sent to email" });
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { userId, token } = req.params;
  const { password } = req.body;
  const tokenDoc = await Token.findOne({ userId, token });
  if (!tokenDoc) return res.status(400).json({ message: "Invalid or expired token" });

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.findByIdAndUpdate(userId, { password: hashedPassword });
  await Token.findByIdAndDelete(tokenDoc._id);

  res.json({ message: "Password reset successfully" });
};
