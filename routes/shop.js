const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("Hello Running Express");
    res.send('<h1>Hello from Express JS</h1>')
})

module.exports = router;