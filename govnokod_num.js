'use strict';

const Num = 'new Govno.Procedure(\'(function(value) {\
  this.value = value;\
})\').invoke();';

const { send } = require('micro');

module.exports = function(request, response) {
  send(response, 200, Num);
};
