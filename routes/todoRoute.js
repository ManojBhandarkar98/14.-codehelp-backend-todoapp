const express = require('express')
const router = express.Router();

//import controller
const { createTodoController } = require("../controllers/todoController");
const {getTodoController,getTodoById} = require("../controllers/getTodo");
const {updateTodoController} = require("../controllers/updateTodo");

//define http api route
router.post("/createTodo", createTodoController);
router.get("/getTodos",getTodoController);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodos/:id",updateTodoController);

module.exports = router;