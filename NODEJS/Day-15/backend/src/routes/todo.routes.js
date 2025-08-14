const express = require("express");
const { listTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");


const router = express.Router();


router.get("/", listTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
