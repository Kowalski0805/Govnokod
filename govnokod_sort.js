'use strict';

const Sort = 'new Govno.Procedure(\'(function (a, b) {\
  this.smaller = function() {\
    if (a.value < b.value) return 1;\
    if (a.value > b.value) return -1;\
  };\
  this.greater = function() {\
    if (a.value < b.value) return -1;\
    if (a.value > b.value) return 1;\
  };\
})\').invoke();';

const { send } = require('micro');

module.exports = function(request, response) {
  send(response, 200, Sort);
};
