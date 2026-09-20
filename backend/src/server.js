import express from "express"
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();
const PORT=process.env.PORT || 5001

//middleware
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use(rateLimiter)

// END middleware

// Routes
app.use("/api/notes"  , notesRoutes)
// END Routes

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server is started on PORT:",PORT);
    })

})
// rqQ9t99218MasWiP
// devahmadraza296_db_user
// mongodb+srv://devahmadraza296_db_user:@cluster0.tfbt5ee.mongodb.net/?appName=Cluster0