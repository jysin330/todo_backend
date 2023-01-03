const mongoose = require("mongoose");

const Task = new mongoose.Schema(
    {
        task: {
            type: [String],
            trim: true

        }
    }, { timestamps: true }
)

const Todo = new mongoose.Schema(
    {
        title: {
            type: String,
            maxlength: [30, "todo title be max 30 length"],
            trim: true
        },
        todo: {
            type: [Task]
        }
    }
    , { timestamps: true }

)
const userTodo = new mongoose.Schema(
    {
        _id: {
            type: String,
            require: true
        }
    }, {
    alltodos: {
        type: [Todo]
    }
}, {
    _id: false
}
)
module.exports = mongoose.model("todo", userTodo);
