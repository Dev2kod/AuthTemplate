const express = require("express")

const app = express();

const ageCheck=(age)=>{
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}

app.get('/ride1', (req,res)=>{
    const data = req.query.age;
    res.json({
    msg: "You have successfully booked RIDE-1",
    age: data
  })  
})

app.listen(4000,()=>{console.log("running on 4000")})
