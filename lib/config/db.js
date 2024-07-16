import mongoose from 'mongoose'
 export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://manas43:mk123456@cluster0.b0uqm6f.mongodb.net/blog-app')
    console.log("db connected")
}