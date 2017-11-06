'use strict';

const port = 3000;

const dnode = require('dnode');

const server = dnode({
  sortedfilter(args, callback) {
    callback(null, '(function(rule) {\
      var ok = false;\
      if((rule(this[0]) == -1) && ok == false) {\
        this.shift();\
        this.sf(rule);\
      } else if ((rule(this[this.length-1]) == -1) && ok == false) {\
        this.pop();\
        this.sf(rule);\
      } else {\
        ok = true;\
      }\
    })');
  }
});

server.listen(port);
