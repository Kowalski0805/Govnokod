'use strict';
const http = require('http');
const bl = require('concat-stream');

const Govno = {};

const extracallbacks = res2 => {
  res2.setEncoding('utf8');
  res2.pipe(bl(data2 => {
    Array.prototype.mySort = eval(data2);
    http.get('http://localhost:3005', res3 => {
      res3.setEncoding('utf8');
      res3.pipe(bl(data3 => {
        Array.prototype.sortedfilter = eval(data3);
        // Масив с числами. Отобрать числа меньше 20.
        // Упорядочить от большего к меньшему.
        // Не использовать циклы
        const array = [ 1, 2, 44, 19, 50, 23, 2, 13, 7 ];
        array.mySort(new Govno.Procedure('new Govno.Sort(\
            new Govno.Num(a), new Govno.Num(b)\
        ).greater()').invoke);
        // отобрать меньше 20 = убрать >= 20
        array.sortedfilter(new Govno.Procedure('new Govno.Sort(\
            new Govno.Num(a), new Govno.Num(20)\
        ).smaller()').invoke);
        /*/
        console.log(array.toString());
        /*/
        const port = 3000;
        const hostname = '127.0.0.1';
        const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(array.toString());
        });
        server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
        });
        //*/
      }));
    });
  }));
};

http.get('http://localhost:3001', res => {
  res.setEncoding('utf8');
  res.pipe(bl(data => {
    Govno.Procedure = eval(data);
    http.get('http://localhost:3002', res0 => {
      res0.setEncoding('utf8');
      res0.pipe(bl(data => {
        Govno.Num = eval(data);
        http.get('http://localhost:3003', res1 => {
          res1.setEncoding('utf8');
          res1.pipe(bl(data1 => {
            Govno.Sort = eval(data1);
            http.get('http://localhost:3004', extracallbacks);
          }));
        });
      }));
    });
  }));
});
