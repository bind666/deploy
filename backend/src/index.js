import app from "./app.js";
import dbConnect from "./db/dbConnect.js";
import dotenv from "dotenv"
dotenv.config();

dbConnect().then(()=>{
    const PORT = process.env.PORT || 5500;
    app.listen(PORT,()=>{
        console.log(`Connected to server at PORT ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
    process.exit(1)
})