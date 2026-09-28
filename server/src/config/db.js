import mongoose from "mongoose"
import config from "./config.js"

async function connectDB() {
    mongoose.connect(config.MONGO_URL)
    console.log('====================================');
    console.log("Database connected..................");
    console.log('====================================');
}


export default connectDB