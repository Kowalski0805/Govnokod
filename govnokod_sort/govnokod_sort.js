'use strict';

const port = 3000;

const dnode = require('dnode');

const server = dnode({
  sort(args, callback) {
    callback(null, '(function (a, b) {\
      this.smaller = function() {\
        if (a.value < b.value) return 1;\
        if (a.value > b.value) return -1;\
      };\
      this.greater = function() {\
        if (a.value < b.value) return -1;\
        if (a.value > b.value) return 1;\
      };\
    })');
  }
});

server.listen(port);
