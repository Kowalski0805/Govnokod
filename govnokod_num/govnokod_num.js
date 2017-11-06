'use strict';

const port = 3000;

const dnode = require('dnode');

const server = dnode({
  num(val, callback) {
    callback(null, '(function(value) {\
      this.value = value;\
    })');
  }
});

server.listen(port);
