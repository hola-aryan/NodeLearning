const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/contactus',(req,res,next)=>{
    console.log("Contact running");
    res.sendFile(path.join(__dirname,'../','views', 'contactus.html'))
    
})

module.exports = router;