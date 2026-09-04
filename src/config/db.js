import mongoose from 'mongoose'
export const connectDB=async()=>{
    try {
       await mongoose.connect("mongodb+srv://devahmadraza296_db_user:rqQ9t99218MasWiP@cluster0.tfbt5ee.mongodb.net/?appName=Cluster0")
console.log('MongoDB Connected Successfully')
} catch (error) {
        console.error('Error connecting to MongoDB',error)
        
    }
}