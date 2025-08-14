const Todo = require("../models/todo.model");
const { buildQuery } = require("../utils/query");

// GET /api/todos    search/filter/sort/pagination
exports.listTodos = async (req, res) => {
  try {
    const { filter, sort, page, limit, skip, projection } = buildQuery(
      req.query
    );

    const [items, total] = await Promise.all([
      Todo.find(filter, projection).sort(sort).skip(skip).limit(limit).lean(),
      Todo.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    res.json({
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        sort,
      },
      data: items,
    });
  } catch (err) {
    console.error("listTodos error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// (Optional) Create/Update/Delete — included for completeness
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      ...req.body,
      user: req.user?._id || req.body.user,
    });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) return res.status(404).json({ message: "Not found" });
    res.json(todo);
  } catch {
    res.status(400).json({ message: "Invalid request" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch {
    res.status(400).json({ message: "Invalid request" });
  }
};
