import express from "express"
import cors from "cors"
import { Mongoose } from "mongoose"
import zod from "zod"
const app = express()

app.use(express.json())



app.listen(3000,()=>{console.log("running on port 3000")})