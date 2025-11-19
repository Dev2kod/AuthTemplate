const express = require("express")
let data = {
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "isActive": true
}

const app = express()
app.use(express.json())

//web endpoints
app.get("/",(req,res)=>{
    
    res.send('<h1>HomePage</h1>').Status(200)
})

app.get("/dashboard",(req,res)=>{
    res.send('<h1>Dashboard</h1>')
})

//api endpoints
app.get("/api/data",(req,res)=>{
    res.send(data).status(200)
})
app.post("/api/data",(req,res)=>{
    const payload = req.body;
    data = payload
    res.send(data).status(200)
})

//starting app
app.listen(3000,()=>{console.log("running on 3000");
 })