const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        const date = new Date();
        res.setHeader('Content-Type', 'application/json');
        res.end(date.toISOString());
    } else if (req.url === "/hello") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello, World!');
    } else {
        res.statusCode = 404;
        res.end('Route not found');
    }
});
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});