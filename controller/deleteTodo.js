//import model
const Todo = require("../models/Todo")

//define route Handler
exports.deleteTodoController = async (req, res) => {
    try {
        const { id } = req.params;

        await Todo.findByIdAndDelete(id);

        //send json response with success flag
        res.status(200).json({
            success: true,
            message: "deleted Successfully..!"
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
