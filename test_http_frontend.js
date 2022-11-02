const http = require('http');
const file = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"});
    file.readFile('./test.html', function (err, html) {
        if (err) {
            throw err; 
        } 
        res.write(html)  
        res.end()
    })
    
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
