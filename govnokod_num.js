'use strict';

const Num = 'new Govno.Procedure(\'(function(value) {\
  this.value = value;\
})\').invoke();';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(Num);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
