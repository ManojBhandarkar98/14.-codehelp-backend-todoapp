//import model
const Todo = require("../models/Todo")

//define route Handler
exports.createTodoController = async (req, res) => {
    try {
        //extract title, des from request body
        const { title, description } = req.body;
        //create new todo Object is insert into DB
        const response = await Todo.create({ title, description });
        console.log(response);
        //send json response with success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created Successfully..!"
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
