const express = require("express");
const { registerUser, verifyEmail, forgotPassword, resetPassword } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:userId/:token", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:userId/:token", resetPassword);

module.exports = router;
