import users from "../data/users.js";

// Get all
export const getAllUsers = (req, res) => {
  res.json(users);
};

// Get by ID
export const getUserById = (req, res, next) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return next(new Error("User not found"));
  res.json(user);
};

// Create new
export const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update
export const updateUser = (req, res, next) => {
  const { name, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === Number(req.params.id));

  if (userIndex === -1) return next(new Error("User not found"));

  users[userIndex] = { ...users[userIndex], name, email };
  res.json(users[userIndex]);
};

// Delete
export const deleteUser = (req, res, next) => {
  const userIndex = users.findIndex((u) => u.id === Number(req.params.id));

  if (userIndex === -1) return next(new Error("User not found"));

  const deleted = users.splice(userIndex, 1);
  res.json({ message: "User deleted", user: deleted[0] });
};
