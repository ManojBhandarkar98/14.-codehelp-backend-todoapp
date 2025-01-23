const express = require('express')
const router = express.Router();

//import controller
const { createTodoController } = require("../controllers/todoController");
const {getTodoController,getTodoById} = require("../controllers/getTodo");

//define http api route
router.post("/createTodo", createTodoController);
router.get("/getTodos",getTodoController);

module.exports = router;