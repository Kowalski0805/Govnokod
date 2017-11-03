'use strict';

const mySort = 'new Govno.Procedure(\'(function(rule) {\
  var swapped = false;\
  var i = 0;\
  var that = this;\
  var go = function(that) {\
    if (rule(that[i], that[i+1]) == -1) {\
      var temp = that[i];\
      that[i] = that[i+1];\
      that[i+1] = temp;\
      swapped = true;\
    }\
    if (i < that.length-1) {\
      i++;\
      go(that);\
    }\
  };\
  go(that);\
  if (swapped) this.mySort(rule);\
})\').invoke();';

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(mySort);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
