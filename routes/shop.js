const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("Shop running");
    res.sendFile(path.join(__dirname,'../','views', 'add-product.html'))
    
})

module.exports = router;