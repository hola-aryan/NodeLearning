const express = require('express')

const app = express();

app.use((req,res,next)=>{
    console.log("Hello Running Express");
    res.send('<h1>Hello from Express JS</h1>')
    next();
})

app.use((req,res,next)=>{
    console.log("Hello Running Express fron 2nd middle Ware");
})

app.listen(5000)