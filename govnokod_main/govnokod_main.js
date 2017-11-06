'use strict';
const http = require('http');

const Govno = {};
const dnode = require('dnode');

function moreCallbacks(mysortremote) {
  mysortremote.mySort(null, (err, data) => {
    Array.prototype.mySort = new Govno.Procedure(data).invoke();
    const filterclient = dnode.connect(3000, 'govno.sortedfilter');
    filterclient.on('remote', (filterremote) => {
      filterremote.sortedfilter(null, (err, data) => {
        Array.prototype.sf = new Govno.Procedure(data).invoke();

        const array = [ 1, 2, 44, 19, 50, 23, 2, 13, 7 ];
        array.mySort(new Govno.Procedure('new Govno.Sort(\
          new Govno.Num(a), new Govno.Num(b)\
        ).greater()').invoke);
        // отобрать меньше 20 = убрать >= 20
        array.sf(new Govno.Procedure('new Govno.Sort(\
          new Govno.Num(a), new Govno.Num(20)\
        ).smaller()').invoke);

        const port = 3000;
        const hostname = '0.0.0.0';
        const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(array.toString());
        });
        server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
        });
      });
    });
  });
}

const procedureclient = dnode.connect(3000, 'govno.procedure');
procedureclient.on('remote', (procedureremote) => {
  procedureremote.procedure(null, (err, data) => {
    Govno.Procedure = eval(data);
    const numclient = dnode.connect(3000, 'govno.num');
    numclient.on('remote', (numremote) => {
      numremote.num(null, (err, data) => {
        Govno.Num = new Govno.Procedure(data).invoke();
        const sortclient = dnode.connect(3000, 'govno.sort');
        sortclient.on('remote', (sortremote) => {
          sortremote.sort(null, (err, data) => {
            Govno.Sort = new Govno.Procedure(data).invoke();
            const mysortclient = dnode.connect(3000, 'govno.mysort');
            mysortclient.on('remote', (mysortremote) => {
              moreCallbacks(mysortremote);
            });
          });
        });
      });
    });
  });
});
