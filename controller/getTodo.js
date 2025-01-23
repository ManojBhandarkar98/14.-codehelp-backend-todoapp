//import model
const Todo = require("../models/Todo")

//define route Handler
exports.getTodoController = async (req, res) => {
    try {
        //fetch all todo item from db
        const todos = await Todo.find({});

        //response update
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: "All todo data is fetched"
            })
    }
    catch (error) {
        console.log(error);
        console.error(error);
        res.status(500)
            .json({
                success: false,
                data: "Internal Server Error",
                message: error.message
            })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        //extact todo item basis on id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: `No data found with given id - ${id}`
            })
        }
        res.status(200).json({
            success: true,
            message: `Todo ${id} data successfully fetched...`
        })
    }
    catch (err) {
        console.log(error);
        console.error(error);
        res.status(500)
            .json({
                success: false,
                data: "Internal Server Error",
                message: error.message
            })
    }
}