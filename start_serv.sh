#!/bin/bash
echo -e '\e[32mStarting govno microservices'
micro -p 3001 govnokod_procedure.js&
micro -p 3002 govnokod_num.js&
micro -p 3003 govnokod_sort.js&
micro -p 3004 govnokod_mysort.js&
micro -p 3005 govnokod_sortedfilter.js&
