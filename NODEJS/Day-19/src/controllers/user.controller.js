import User from "../models/user.model.js";

export const me = async (req, res) => res.json(req.user);

export const listUsers = async (_req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const blockUser = async (req, res) => {
  const u = await User.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true }).select("-password");
  if (!u) return res.status(404).json({ message: "User not found" });
  res.json({ message: "User blocked", user: u });
};
