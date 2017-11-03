'use strict';

const sortedfilter = 'new Govno.Procedure(\'(function(rule) {\
  var ok = false;\
  if((rule(this[0]) == -1) && ok == false) {\
    this.shift();\
    this.sortedfilter(rule);\
  } else if ((rule(this[this.length-1]) == -1) && ok == false) {\
    this.pop();\
    this.sortedfilter(rule);\
  } else {\
    ok = true;\
  }\
})\').invoke();';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3005;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(sortedfilter);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
