import express from "express"
import cors from "cors"
import { Mongoose } from "mongoose"
import zod from "zod"
import dotenv from "dotenv"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        msg:"server running"
    })
})


app.listen(4004,()=>{console.log("running on port 4004")})