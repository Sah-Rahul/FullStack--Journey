import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ message: "User already exists!" });

    const user = await User.create({ fullname, email, password });
    res.status(201).json({ token: createToken(user) });
  } catch (error) {
    res.status(500).json({ message: "Registration failed!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    res.status(200).json({ token: createToken(user) });
  } catch (error) {
    res.status(500).json({ message: "Login failed!" });
  }
};
