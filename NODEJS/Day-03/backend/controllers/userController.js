const User = require('../models/userModel');

// GET all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// POST create user
const createUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email required" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = await User.create({ name, email });
  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };
