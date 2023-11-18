const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url; 
    if(url === "/"){
        res.write('<html>'); 
        res.write('<head><title>Write Message</title></head>'); 
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit"></button> </form></body>'); 
        res.write('</html>');
        return res.end();
    }
    if(url === "/home"){
        res.write('<html>'); 
        res.write('<head><title>Write Message</title></head>'); 
        res.write('<body>Welcome to the Home</body>'); 
        res.write('</html>');
        return res.end();
    }
    if(url === "/about"){
        res.write('<html>'); 
        res.write('<head><title>Write Message</title></head>'); 
        res.write('<body>Welcome to the About</body>'); 
        res.write('</html>');
        return res.end();
    }
    if(url === "/node"){
        res.write('<html>'); 
        res.write('<head><title>Write Message</title></head>'); 
        res.write('<body>Welcome to the Node Page</body>'); 
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>'); 
    res.write('<head><title>Hello World</title></head>'); 
    res.write('<body>Hello From Node JS Server File name app.js</body>'); 
    res.write('</html>');
 })

server.listen(4000)