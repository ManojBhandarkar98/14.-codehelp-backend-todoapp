const express = require('express')
const router = express.Router();

//import controller
const { createTodoController } = require("../controllers/todoController");

//define http api route
router.post("/createTodo", createTodoController);

module.exports = router;