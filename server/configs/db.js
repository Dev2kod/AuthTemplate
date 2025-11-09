import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectdb = async() => {
try {
    console.log(process.env.MONGO_URI)
    const connection =await mongoose.connect(process.env.MONGO_URI)
    console.log("Db connected")
} catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1);
}
}

export default connectdb;