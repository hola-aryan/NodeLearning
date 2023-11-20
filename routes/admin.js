const { log } = require('console');
const express = require('express');
const path = require('path');

const router = express.Router();

    router.get('/add-Product',(req,res,next)=>{
        console.log("Add Product running");
        res.sendFile(path.join(__dirname,'../','views', 'shop.html'))
    })

    
    router.post('/addProduct',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
    })

module.exports = router