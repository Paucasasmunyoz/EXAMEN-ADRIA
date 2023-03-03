const http = require('http');

const hostname = '127.0.0.1';
const port = 3010;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Mi nombre y apellidos son: [Pau Casas Muñoz]');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
