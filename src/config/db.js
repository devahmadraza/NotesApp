import mongoose from "mongoose";
import dns from "node:dns";
import dotenv from "dotenv";

dotenv.config();

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
};