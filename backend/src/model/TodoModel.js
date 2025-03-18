import mongoose, { model } from "mongoose"

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const TodoModel = model("TodoModel",todoSchema)
export default TodoModel;