import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5001
connectDB()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
next()
})


// END middleware


app.use("/api/notes" , notesRoutes)

app.listen(PORT,()=>{
console.log("Server is started on PORT:",PORT);
})

// rqQ9t99218MasWiP
// devahmadraza296_db_user
// mongodb+srv://devahmadraza296_db_user:@cluster0.tfbt5ee.mongodb.net/?appName=Cluster0