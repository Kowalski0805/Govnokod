'use strict';

const port = 3000;

const dnode = require('dnode');

const server = dnode({
  procedure(body, callback) {
    callback(null, '(function(body) {\
      this.invoke = function(a, b) {\
        return eval(body);\
      }\
    })');
  }
});

server.listen(port);
