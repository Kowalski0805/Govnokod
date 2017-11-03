'use strict';

const Sort = 'new Govno.Procedure(\'(function (a, b) {\
  this.smaller = function() {\
    if (a.value < b.value) return 1;\
    if (a.value > b.value) return -1;\
  };\
  this.greater = function() {\
    if (a.value < b.value) return -1;\
    if (a.value > b.value) return 1;\
  };\
})\').invoke();';

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(Sort);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
