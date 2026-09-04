import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

const app = express();
connectDB()
app.use("/api/notes" , notesRoutes)

app.listen(5001,()=>{
console.log("Server is started on PORT:  5001");
})

// rqQ9t99218MasWiP
// devahmadraza296_db_user