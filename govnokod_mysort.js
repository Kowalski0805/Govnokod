'use strict';

const mySort = "new Govno.Procedure('(function(rule) {\
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
})').invoke();";

const { send } = require('micro');

module.exports = function (request, response) {
  send(response, 200, mySort);
};
