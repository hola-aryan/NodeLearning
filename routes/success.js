const express = require('express');
const path = require('path');

const router = express.Router();

router.post('/success',(req,res,next)=>{
    console.log("Success running");
    res.sendFile(path.join(__dirname,'../','views', 'success.html'))
    
})

module.exports = router;