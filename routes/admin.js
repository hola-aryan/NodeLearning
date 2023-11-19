const express = require('express');

const router = express.Router();

    router.get('/addProduct',(req,res,next)=>{
        res.send('<form action="/admin/addProduct" method ="POST"> <input type="text" name="item" placeholder="Add Item"> <input type="number" name="Quantity" placeholder="Quantity"><br> <button type="submit">Submit</button> </form>')
    })
    
    router.post('/addProduct',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
    })

module.exports = router