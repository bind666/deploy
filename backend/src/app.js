import express from "express"
import cors from "cors"
import TodoModel from "./model/TodoModel.js";
const app = express();

app.use(express.json({ limit: "1MB" }))
app.use(express.urlencoded({ extended: true, limit: "1MB" }))
app.use(cors({
    credentials: true,
    origin: [process.env.ORIGINS]
}))

app.post("/todo", async (req, res) => {
    try {
        const { todo } = req.body;
        const newTodo = await TodoModel.create({ todo })
        res.status(200).json({
            mesage: "todo added",
            newTodo
        })
    } catch (error) {
        console.log(error);
    }
})

app.get("/todo", async (req, res) => {
    try {
        const todo = await TodoModel.find({});
        res.status(200).json({
            todo
        })
    } catch (error) {
        console.log(error);
    }
})

app.get("/", (req, res) => {
    res.status(200).json({
        message: "This is a healthy route."
    })
})

export default app;