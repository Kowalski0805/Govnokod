'use strict';
const http = require('http');
const bl = require('concat-stream');

const Govno = {};

http.get('http://localhost:3001', function(res) {
  res.setEncoding('utf8');
  res.pipe(bl(function(data) {
    Govno.Procedure = eval(data);
    http.get('http://localhost:3002', function(res0) {
      res0.setEncoding('utf8');
      res0.pipe(bl(function (data) {
        Govno.Num = eval(data);
        http.get('http://localhost:3003', function(res1) {
          res1.setEncoding('utf8');
          res1.pipe(bl(function (data1) {
            Govno.Sort = eval(data1);
            http.get('http://localhost:3004', function (res2) {
              res2.setEncoding('utf8');
              res2.pipe(bl(function (data2) {
                Array.prototype.mySort = eval(data2);
                http.get('http://localhost:3005', function (res3) {
                  res3.setEncoding('utf8');
                  res3.pipe(bl(function (data3) {
                    Array.prototype.sortedfilter = eval(data3);
                    // Масив с числами. Отобрать числа меньше 20. Упорядочить от большего к меньшему. Не использовать циклы
                    var array = [ 1, 50, 23, 2, 13, 7 ];
                    array.mySort(new Govno.Procedure('new Govno.Sort(new Govno.Num(a), new Govno.Num(b)).greater()').invoke);
                    // отобрать меньше 20 = убрать >= 20
                    array.sortedfilter(new Govno.Procedure('new Govno.Sort(new Govno.Num(a), new Govno.Num(20)).smaller()').invoke);
                    console.log(array.toString());
                    // const { send } = require('micro');
                    //
                    // module.exports = function (request, response) {
                    //     send(response, 200, array.toString());
                    // };
                  }));
                });
              }));
            });
          }));
        });
      }));
    });
  }));
});
