import mongoose from "mongoose"

const connectdb = async() => {
try {
    const connection =await mongoose.connect("mongodb://localhost:27017/")
    console.log("Db connected")
} catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1);
}
}

export default connectdb;