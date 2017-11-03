#!/bin/bash
echo -e '\e[32mBuilding Docker Govnoimages\e[0m'
sudo docker build -t govnoprocedure govnokod_procedure
sudo docker build -t govnonum govnokod_num
sudo docker build -t govnosort govnokod_sort
sudo docker build -t govnomysort govnokod_mysort
sudo docker build -t govnofilter govnokod_sortedfilter
sudo docker build -t govnomain govnokod_main

echo -e '\e[32mCreating Docker Govnonetwork\e[0m'
sudo docker network create govnonetwork

echo -e '\e[32mRunning Docker Govnocontainers\e[0m'
sudo docker run -d --net=govnonetwork --network-alias=govno.procedure govnoprocedure
sudo docker run -d --net=govnonetwork --network-alias=govno.num govnonum
sudo docker run -d --net=govnonetwork --network-alias=govno.sort govnosort
sudo docker run -d --net=govnonetwork --network-alias=govno.mysort govnomysort
sudo docker run -d --net=govnonetwork --network-alias=govno.sortedfilter govnofilter
sudo docker run -d -p 3000:3000 --net=govnonetwork govnomain

echo -e '\e[32mSuccess!\e[0m'
