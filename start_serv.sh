#!/bin/bash
echo -e '\e[32mStarting govno microservices'
node govnokod_procedure.js&
node govnokod_num.js&
node govnokod_sort.js&
node govnokod_mysort.js&
node govnokod_sortedfilter.js&
