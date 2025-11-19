import express from "express"
let count = 1
const app = express()

app.get("/",(req,res)=>{
    console.log(count)
    const a = count 
    res.send(a)
    count++
})

app.listen(3000,()=>{console.log("port running on port 3000")})