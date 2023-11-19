const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/addProduct',(req,res,next)=>{
    res.send('<form action="/product" method ="POST"> <input type="text" name="item" placeholder="Add Item"> <input type="number" name="Quantity" placeholder="Quantity"><br> <button type="submit">Submit</button> </form>')
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    console.log("Hello Running Express");
    res.send('<h1>Hello from Express JS</h1>')
})


app.use((req,res,next)=>{
    console.log("Hello Running Express fron 2nd middle Ware");
})

app.listen(5000)