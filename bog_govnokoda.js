'use strict';

const Procedure = eval('(function(body) {\
  this.invoke = function(a, b) {\
    return eval(body);\
  }\
})');

const Num = new Procedure('(function(value) {\
  this.value = value;\
})');
Num.invoke();

const Sort = new Procedure('(function (a, b) {\
  this.smaller = function() {\
    if (a.value < b.value) return 1;\
    if (a.value > b.value) return -1;\
  };\
  this.greater = function() {\
    if (a.value < b.value) return -1;\
    if (a.value > b.value) return 1;\
  };\
})');
Sort.invoke();

Array.prototype.mySort = new Procedure('(function(rule) {\
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
})').invoke();

Array.prototype.sortedfilter = new Procedure('(function(rule) {\
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
})').invoke();

// Масив с числами. Отобрать числа меньше 20.
// Упорядочить от большего к меньшему. Не использовать циклы
const array = [ 1, 50, 23, 2, 13, 7 ];
array.mySort(new Procedure(
  'new Sort(new Num(a), new Num(b)).greater()'
).invoke);
// отобрать меньше 20 = убрать >= 20
array.sortedfilter(new Procedure(
  'new Sort(new Num(a), new Num(20)).smaller()'
).invoke);
console.log(array);

const { send } = require('micro');

module.exports = function(request, response) {
  send(response, 200, array.toString());
};
