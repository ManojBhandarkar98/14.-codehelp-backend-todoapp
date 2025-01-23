//import model
const Todo = require("../models/Todo")

//define route Handler
exports.updateTodoController = async (req, res) => {
    try {
        const { id } = req.params;
        //extract title, des from request body
        const { title, description } = req.body;
        //create new todo Object is insert into DB
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            { title, description, updatedAt:Date.now() });
      
        //send json response with success flag
        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated Successfully..!"
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
