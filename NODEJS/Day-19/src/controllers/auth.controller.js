import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import { config } from "../config/index.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, isVerified: false });

  // simple verify link (extend with token model if you want)
  const verifyUrl = `${config.clientUrl}/verify/${user._id}`;
  await sendEmail({
    to: email,
    subject: "Verify your account",
    html: `<p>Welcome ${name}!</p><p>Verify your account: <a href="${verifyUrl}">${verifyUrl}</a></p>`
  });

  res.status(201).json({ message: "Registered. Please verify email.", user: { id: user._id, email } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken({ id: user._id, role: user.role });
  res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
};
