const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url; 
    const method = req.method; 
    if(url === "/"){
        res.write('<html>'); 
        res.write('<head><title>Write Message</title></head>'); 
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Submit</button> </form></body>'); 
        res.write('</html>');
        return res.end();
    }
    
    if (url === "/message" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
    
            // Append the message to the file
            fs.appendFile('message.txt', message + '\n', (err) => {
    
                // Read the existing messages from the file
                fs.readFile('message.txt', 'utf8', (err, data) => {
    
                    // Display the messages on top of the page
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<html>');
                    res.write('<head><title>Write Message</title></head>');
                    res.write('<body><h1>Message Submitted:</h1><p>' + message + '</p>');
                    res.write('<h2>Previous Messages:</h2><p>' + data + '</p></body>');
                    res.write('</html>');
                    res.end();  // Move res.end() here
                });
            });
        });
    
        return;
    }
    
}

module.exports = requestHandler;