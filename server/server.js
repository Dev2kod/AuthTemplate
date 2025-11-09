import express from "express"
import cors from "cors"
import { Mongoose } from "mongoose"
import zod from "zod"
import dotenv from "dotenv"
import connectdb from "./configs/db.js"

const app = express()

connectdb();
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        msg:"server running"
    })
})


app.listen(3000,()=>{console.log("running on port 3000")})