const express = require("express")
let data = ["dname1"]

const app = express()
app.use(express.json())

//web endpoints
app.get("/",(req,res)=>{
    res.send(`
        <body>
            <h1>HomePage</h1>
            <a href="/data">Data endpoint</a>
        </body>`
    ).Status(200)
    
})

app.get("/data",(req,res)=>{
    res.send(data)
})

//api endpoints
app.get("/api/data",(req,res)=>{
    res.send(data).status(200)
})
app.post("/api/data",(req,res)=>{
    const payload = req.body;
    data.push(payload)
    res.send("data added").status(202)
})


//starting app
app.listen(3000,()=>{console.log("running on 3000");})