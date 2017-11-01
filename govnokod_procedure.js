'use strict';

const Procedure = '(function(body) {\
  this.invoke = function(a, b) {\
    return eval(body);\
  }\
})';

const { send } = require('micro');

module.exports = function(request, response) {
  send(response, 200, Procedure);
};
