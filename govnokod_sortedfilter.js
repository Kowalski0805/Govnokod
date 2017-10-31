'use strict';

const sortedfilter = "new Govno.Procedure('(function(rule) {\
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
})').invoke();";

const { send } = require('micro');

module.exports = function (request, response) {
  send(response, 200, sortedfilter);
};
