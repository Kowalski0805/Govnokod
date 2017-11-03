'use strict';

const Procedure = '(function(body) {\
  this.invoke = function(a, b) {\
    return eval(body);\
  }\
})';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(Procedure);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
